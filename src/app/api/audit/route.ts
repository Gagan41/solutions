import { NextRequest, NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN!);

// Function to extract JSON from model response
function extractJSON(text: string): any {
  // Remove <think> tags and their content (ES5 compatible)
  text = text.replace(/<think>[\s\S]*?<\/think>/g, "");

  // Find JSON object in the text
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    try {
      return JSON.parse(jsonMatch[0]);
    } catch (e) {
      console.error("Failed to parse extracted JSON:", e);
    }
  }

  // Fallback: try to parse the entire text
  try {
    return JSON.parse(text);
  } catch (e) {
    console.error("Failed to parse text as JSON:", e);
    throw new Error("Invalid JSON response from model");
  }
}

export async function POST(req: NextRequest) {
  const { url, auditType } = await req.json();

  const prompt = `
You are a JSON-only response agent. You must respond with ONLY valid JSON - no other text, tags, or content.

CRITICAL: Do NOT include:
- <think> tags
- Reasoning steps
- Explanations
- Markdown formatting
- Any text before or after the JSON

Analyze the website: "${url}"  
Audit type: "${auditType.toUpperCase()}"

Return ONLY this JSON format:

{
  "score": number (between 30 and 100),
  "issues": [string],
  "recommendations": [string], 
  "loadTime": number (in seconds, like 0.5)
}

Start your response with { and end with }. Nothing else.
`;

  try {
    const response = await client.chatCompletion({
      provider: "hyperbolic",
      model: "deepseek-ai/DeepSeek-R1-0528",
      messages: [{ role: "user", content: prompt }],
    });

    const raw = response.choices?.[0]?.message?.content?.trim() || "{}";
    console.log("Raw model output:", raw);

    let parsed;
    try {
      parsed = extractJSON(raw);
    } catch (parseError) {
      console.error("JSON parsing failed, using fallback:", parseError);
      // Fallback response if JSON parsing fails
      parsed = {
        score: 75,
        issues: ["Unable to analyze website due to technical issues"],
        recommendations: ["Please try again or contact support"],
        loadTime: 1.5,
      };
    }

    return NextResponse.json({
      score: parsed.score ?? 60,
      issues: parsed.issues ?? [],
      recommendations: parsed.recommendations ?? [],
      loadTime: parsed.loadTime ?? 1.5,
    });
  } catch (error) {
    console.error("Audit error:", error);
    return NextResponse.json(
      { error: "Failed to analyze website." },
      { status: 500 }
    );
  }
}

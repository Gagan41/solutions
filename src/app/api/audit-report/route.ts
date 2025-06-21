import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI!;
const client = new MongoClient(uri);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, url, auditType, auditResult } = body;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await client.connect();
    const database = client.db("website_audits");
    const collection = database.collection("report_requests");

    // Insert the audit report request
    const result = await collection.insertOne({
      email,
      url,
      auditType,
      auditResult,
      createdAt: new Date(),
      status: "pending",
    });

    return NextResponse.json({
      success: true,
      message:
        "Report request saved successfully. We'll send you the detailed report soon!",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Error saving audit report request:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to save report request. Please try again.",
      },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}

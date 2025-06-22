import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI!;
const client = new MongoClient(uri);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, roiData } = body;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await client.connect();
    const database = client.db("roi_requests");
    const collection = database.collection("emails");

    // Check if email already exists
    const existingEmail = await collection.findOne({ email });
    if (existingEmail) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 409 }
      );
    }

    // Insert the ROI email request
    const result = await collection.insertOne({
      email,
      roiData,
      createdAt: new Date(),
      status: "pending",
    });

    return NextResponse.json({
      success: true,
      message: "Email saved successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Error saving ROI email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save email" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}

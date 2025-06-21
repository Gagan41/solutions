import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI!;
const client = new MongoClient(uri);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Connect to MongoDB
    await client.connect();
    const database = client.db("callback_requests");
    const collection = database.collection("requests");

    // Insert the callback request
    const result = await collection.insertOne({
      name,
      email,
      phone,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Callback request received successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Error saving callback request:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save callback request" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}

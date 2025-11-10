import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  try {
    if (!client) client = new MongoClient(uri);
    await client.connect();
    const db = client.db("contactForm");
    const collection = db.collection("contacts");

    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    await collection.insertOne({
      name,
      email,
      phone,
      service,
      message,
      createdAt: new Date(),
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

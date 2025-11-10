// /api/contact.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Add this to .env.local
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    await client.connect();
    const database = client.db('contactForm');
    const collection = database.collection('contacts');

    const result = await collection.insertOne({
      name,
      email,
      phone,
      service,
      message,
      createdAt: new Date(),
    });

    return res.status(200).json({ success: true, id: result.insertedId });
  } catch (err) {
    console.error('Error inserting contact form:', err);
    return res.status(500).json({ success: false, error: err.message });
  } finally {
    await client.close();
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

interface ResponseData {
  success: boolean;
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('contact-form'); // Replace with your DB name

    await db.collection('contacts').insertOne({
      name,
      email,
      phone,
      service,
      message,
      createdAt: new Date()
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('MongoDB insertion error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

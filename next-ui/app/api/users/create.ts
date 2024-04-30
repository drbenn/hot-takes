import type { NextApiRequest, NextApiResponse } from 'next';
import { createUser } from '@/app/lib/userApiService';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('in post handler');
    console.log(req);
    console.log(res);
    
    
    
    if (req.method === 'POST') {
      try {
        const { username, email } = req.body;
        const result = await createUser(username, email);
        res.status(200).json({ success: true, data: result });
      } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end('Method Not Allowed');
    }
  }

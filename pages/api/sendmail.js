import { NextApiRequest, NextApiResponse  } from 'next';

import { sendEmail } from '../../utils/sendEmail';

export default async (req, res) => {
    if(req.method === 'POST') {
      const { firstName, lastName, email, content } = await req.body;
      await sendEmail({ firstName, lastName, email, content });
      return res.status(200).json('Email sent successfully');
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            message: "The requested endpoint was not found or doesn't support this method."
        }
    });
}
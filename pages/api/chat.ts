import type {NextApiRequest, NextApiResponse} from 'next';
import {createChatCompletion} from '../../utils/openaiClient';
import {globalRateLimiter} from '../../utils/rateLimiter';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({error: 'Method not allowed'});
    }

    if (!globalRateLimiter.checkLimit()) {
        return res.status(429).json({
            error: 'Rate limit exceeded. Please wait 30 seconds.'
        });
    }

    try {
        const {messages} = req.body;
        const response = await createChatCompletion(messages);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error generating response'});
    }
}
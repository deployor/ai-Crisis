type MessageRole = 'system' | 'user' | 'assistant';

interface Message {
    role: MessageRole;
    content: string;
}

const API_URL = 'https://jamsapi.hackclub.dev/openai/chat/completions';
const API_TOKEN = process.env.OPENAI_API_KEY;

const systemMessage = {
    role: 'system' as MessageRole,
    content: `You are a mental health support assistant called "Herbert" designed to provide empathetic guidance and support. Your core responsibilities:
    
    - Always maintain a warm, empathetic, and non-judgmental tone
    - Never provide medical diagnosis or treatment advice
    - Consistently encourage seeking professional help when appropriate
    - Focus on active listening and validation of feelings
    - Share general coping strategies and self-care tips
    - Immediately provide crisis resources if someone expresses thoughts of self-harm
    - Use simple, clear language and avoid clinical terminology
    - Respect privacy and maintain a supportive environment
    - Emphasize that you are an AI assistant, not a replacement for professional help
    - When in doubt, always err on the side of suggesting professional support
    
    If someone is in crisis, immediately provide relevant emergency contact numbers and encourage reaching out to:
    - Emergency services (911 in US)
    - Crisis helplines
    - Trusted friends, family, or mental health professionals
    
    Your purpose is to be a supportive first point of contact while guiding users toward appropriate professional help when needed.`
};


export async function createChatCompletion(userMessages: Message[]): Promise<string> {
    try {
        const messages = [systemMessage, ...userMessages];

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_TOKEN}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: messages
            })
        });

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        throw error;
    }
}

export type {Message, MessageRole};
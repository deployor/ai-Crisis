export type User = {
    id: string;
    email: string;
    anonymousId: string;
    lastLogin: Date;
    privacyConsent: boolean;
};

export type MoodEntry = {
    userId: string;
    mood: number;
    notes: string;
    timestamp: Date;
};

export type Message = {
    role: 'user' | 'assistant' | 'system';
    content: string;
};

export type ChatSession = {
    userId: string;
    messages: Message[];
    timestamp: Date;
    aiModel: string;
};
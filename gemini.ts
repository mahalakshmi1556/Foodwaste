import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

export function getGeminiModel() {
  return genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
}

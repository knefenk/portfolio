import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from '../constants';

const apiKey = process.env.API_KEY || '';
// Initialize safe AI client
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateAIResponse = async (userQuery: string): Promise<string> => {
  if (!ai) {
    return "API Key is missing. Please configure the environment.";
  }

  // Construct a prompt that includes the resume context
  const context = JSON.stringify(RESUME_DATA);
  
  const systemInstruction = `
    You are an advanced AI assistant interface for Tan Chun Pan's portfolio website. 
    Your persona is professional, concise, and slightly robotic but helpful (like TARS from Interstellar or JARVIS).
    
    Here is the data about Tan Chun Pan:
    ${context}
    
    Answer the user's question based strictly on this data.
    If the user asks about something not in the data, politely explain you only have access to his professional portfolio data.
    Keep answers relatively short (under 100 words) unless asked for details.
    
    If asked about "Music" or "Movies", mention he is a fan of Christopher Nolan and a "Music Head" as per his personal profile settings.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I processed the data but received no verbal output.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection interrupted. Re-establishing link...";
  }
};

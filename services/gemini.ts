
import { GoogleGenAI, Type } from "@google/genai";

// Vite exposes env vars via import.meta.env (must be prefixed with VITE_)
// Set VITE_GEMINI_API_KEY in your .env.local file or as a GitHub Actions secret
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

export const generateBrandStrategy = async (brandName: string, industry: string) => {
  if (!apiKey) {
    throw new Error("Gemini API key not configured. Set VITE_GEMINI_API_KEY in your .env.local file.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `Generate a luxury digital marketing strategy for a brand named "${brandName}" in the "${industry}" industry. The strategy should feel high-end, exclusive, and performance-driven. Provide a detailed JSON response.`;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          industry: { type: Type.STRING },
          targetAudience: { type: Type.STRING },
          positioningStatement: { type: Type.STRING },
          keyTactics: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          visualIdentityNotes: { type: Type.STRING }
        },
        required: ["name", "industry", "targetAudience", "positioningStatement", "keyTactics", "visualIdentityNotes"]
      }
    }
  });

  return JSON.parse(response.text.trim());
};

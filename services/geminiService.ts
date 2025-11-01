import { GoogleGenAI, Type } from "@google/genai";
import type { TownHotspotData } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      townName: { type: Type.STRING, description: "Name of the dangerous town, city, or urban area." },
      countyName: { type: Type.STRING, description: "The county where the town is located." },
      severity: { type: Type.NUMBER, description: "A danger severity score from 1 (least dangerous) to 10 (most dangerous)." },
      description: { type: Type.STRING, description: "Brief one-sentence explanation of the primary security risks (e.g., 'High rates of muggings and carjackings.')." },
      latitude: { type: Type.NUMBER, description: "The approximate latitude of the town." },
      longitude: { type: Type.NUMBER, description: "The approximate longitude of the town." },
      crimeStatistics: {
        type: Type.ARRAY,
        description: "A list of 2-3 key crime statistics for the town.",
        items: {
          type: Type.OBJECT,
          properties: {
            type: { type: Type.STRING, description: "Type of crime (e.g., 'Muggings', 'Gang Activity')." },
            value: { type: Type.STRING, description: "Statistic, frequency, or level (e.g., 'Daily Occurrences', 'High', 'Increasing')." },
          },
          required: ["type", "value"],
        },
      },
      historicalTrend: { type: Type.STRING, description: "A brief one-sentence summary of the historical security trend (e.g., 'Security has deteriorated recently', 'Persistently high crime rates')." },
    },
    required: ["townName", "countyName", "severity", "description", "latitude", "longitude", "crimeStatistics", "historicalTrend"],
  },
};

export const fetchTownHotspotData = async (): Promise<TownHotspotData[]> => {
  try {
    const prompt = `
      For EACH of the 47 counties in Kenya, identify the single most significant town or urban center that serves as a security hotspot.
      This must result in exactly 47 entries, one for each county.

      If a county is generally safe, select its largest or capital town, assign it a proportionately low severity score (e.g., 1-3), and describe the minor security concerns.
      If a county has major security issues, select the town that best represents these challenges and score it accordingly.

      For each of the 47 towns, provide:
      1. The name of the town.
      2. The county it is in (ensure this matches one of the 47 official counties).
      3. A danger severity score from 1 (very safe) to 10 (extremely dangerous).
      4. A brief, one-sentence explanation for the primary security risks.
      5. Its approximate latitude and longitude.
      6. 2-3 key crime statistics (e.g., types of prevalent crime and their frequency).
      7. A short, one-sentence summary of the security trend over the last 1-2 years.

      Provide the output strictly as a single JSON array containing 47 objects, matching the provided schema.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.3,
      },
    });

    const jsonText = response.text.trim();
    const data = JSON.parse(jsonText);

    // Basic validation
    if (!Array.isArray(data) || data.some(item => typeof item.townName !== 'string')) {
      throw new Error("Invalid data structure received from API.");
    }
    
    return data as TownHotspotData[];

  } catch (error) {
    console.error("Error fetching data from Gemini API:", error);
    // Propagate a more user-friendly error message.
    if (error instanceof Error && error.message.includes('API key')) {
         throw new Error("Invalid API Key. Please check your configuration.");
    }
    throw new Error("Failed to fetch security data. The API may be unavailable or experiencing issues.");
  }
};
const fs = require("fs");
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const analyzeImage = async (imagePath) => {
  const imageBytes = fs.readFileSync(imagePath);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",

    contents: [
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: imageBytes.toString("base64"),
        },
      },
      {
        text: `
Analyze this civic issue image.

Return ONLY valid JSON.

{
  "category":"",
  "severity":"Low | Medium | High",
  "safetyRisk":"Low | Medium | High",
  "description":"",
  "department":"",
  "impactPrediction":"",
  "priority":90
}
`,
      },
    ],
  });

  return response.text;
};

module.exports = analyzeImage;
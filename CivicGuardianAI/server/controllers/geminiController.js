const fs = require("fs");
const ai = require("../gemini/gemini");

const analyzeImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

    const imageBytes = fs.readFileSync(req.file.path);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",

      contents: [
        {
          inlineData: {
            mimeType: req.file.mimetype,
            data: imageBytes.toString("base64"),
          },
        },
        {
          text: `
Analyze this civic issue image.

Return ONLY valid JSON.

{
  "category":"",
  "severity":"Low",
  "safetyRisk":"Low",
  "description":"",
  "department":"",
  "impactPrediction":"",
  "priority":50
}

Possible Categories:
- Pothole
- Garbage Dump
- Water Leakage
- Broken Streetlight
- Damaged Road Sign
- Other
`,
        },
      ],
    });

    let text = response.text;

    // Remove markdown code fences if Gemini returns them
    text = text.replace(/```json/g, "")
               .replace(/```/g, "")
               .trim();

    res.json({
      success: true,
      result: JSON.parse(text),
    });

  } catch (err) {
    console.error("Gemini Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  analyzeImage,
};
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const generateStrategy = async (req, res) => {
  try {
    const { goal, audience, location, budget, duration, product } = req.body;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: `
            You are a Meta Ads expert. Create a complete ad strategy in JSON format only.
            
            Product: ${product}
            Goal: ${goal}
            Target Audience: ${audience}
            Location: ${location}
            Daily Budget: ₹${budget}
            Duration: ${duration} days
            
            Return ONLY this JSON, no extra text:
            {
              "campaignName": "",
              "objective": "",
              "targeting": {
                "ageRange": "",
                "gender": "",
                "interests": [],
                "location": ""
              },
              "adCopy": {
                "headline": "",
                "body": "",
                "callToAction": ""
              },
              "budgetSplit": {
                "daily": "",
                "total": ""
              },
              "bestTime": "",
              "tips": []
            }
          `
        }
      ]
    });

    const text = completion.choices[0].message.content;
    const clean = text.replace(/```json|```/g, '').trim();
    const strategy = JSON.parse(clean);

    res.json({ success: true, strategy });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
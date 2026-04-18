import Groq from "groq-sdk";
import AIStrategy from '../models/AIStrategy.js';
import Campaign from '../models/Campaign.js';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const generateStrategy = async (req, res) => {
  try {
    const { campaignName, adSetName, objective, location, budget, creativeDescription, ageMin, ageMax, placements } = req.body;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: `
  You are a Meta Ads expert. Create a complete ad strategy in JSON format only.
  
  Campaign: ${campaignName}
  Objective: ${objective}
  Location: ${location}
  Daily Budget: ₹${budget}
  Age Range: ${ageMin}-${ageMax}
  Description: ${creativeDescription}
  
  IMPORTANT: interests array must have 3-5 relevant interests based on the campaign description and objective. Never return empty interests array.
  
  Return ONLY this JSON, no extra text:
  {
    "campaignName": "",
    "objective": "",
    "targeting": {
      "ageRange": "",
      "gender": "",
      "interests": ["interest1", "interest2", "interest3"],
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

    // find Campaign 
    const campaign = await Campaign.findOne({
      user: req.user._id,
      campaignName
    });

    // save strategy
   await AIStrategy.create({
  user: req.user._id,
  campaign: campaign?._id,
  strategy  // sirf AI ka response
});

    res.json({ success: true, strategy });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getStrategies = async (req, res) => {
  try {
    const strategies = await AIStrategy.find()
      .populate("campaign", "campaignName")
      .sort({ createdAt: -1 });

    res.json({ success: true, strategies });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};  
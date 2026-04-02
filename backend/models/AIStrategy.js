import mongoose from 'mongoose';

const AIStrategySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' },
 

  // Strategy made by AI
  strategy: {
    campaignName: String,
    objective: String,
    targeting: {
      ageRange: String,
      gender: String,
      interests: [String],
      location: String,
    },
    adCopy: {
      headline: String,
      body: String,
      callToAction: String,
    },
    budgetSplit: {
      daily: String,
      total: String,
    },
    bestTime: String,
    tips: [String],
  },

}, { timestamps: true });

export default mongoose.model('AIStrategy', AIStrategySchema);
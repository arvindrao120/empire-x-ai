import Campaign from '../models/Campaign.js';

export const createCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.create({
      user: req.user._id,
      ...req.body
    });
    res.status(201).json({ success: true, campaign });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json({ success: true, campaigns });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
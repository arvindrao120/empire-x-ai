import User from "../models/User.js";
import Campaign from "../models/Campaign.js";

// Stats
export const getStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCampaigns = await Campaign.countDocuments();
    const activeCampaigns = await Campaign.countDocuments({ status: "active" });
    const paidUsers = await User.countDocuments({ plan: { $ne: "free" } });

    res.json({
      success: true,
      data: { totalUsers, totalCampaigns, activeCampaigns, paidUsers }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// All Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-accessToken -password').sort({ createdAt: -1 });
    res.json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// All Campaigns
export const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate('user', 'displayName email').sort({ createdAt: -1 });
    res.json({ success: true, data: campaigns });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update User Plan
export const updateUserPlan = async (req, res) => {
  try {
    const { plan } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { plan },
       { returnDocument: "after" }
    ).select('-accessToken -password');
    res.json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
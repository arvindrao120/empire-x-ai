import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    campaignName: {
      type: String,
      required: [true, "Campaign name is required"],
      trim: true,
    },
    adSetName: {
      type: String,
      required: [true, "Ad set name is required"],
      trim: true,
    },
    objective: {
      type: String,
      enum: [
        "Conversions",
        "Traffic",
        "Engagement",
        "Awareness",
        "Sales",
        "Lead Generation",
      ],
      required: [true, "Objective is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    creativeDescription: {
      type: String,
      default: "",
    },
    ageMin: {
      type: Number,
      required: true,
      min: 13,
      default: 18,
    },
    ageMax: {
      type: Number,
      required: true,
      max: 65,
      default: 65,
    },
    budget: {
      type: Number,
      required: [true, "Budget is required"],
      min: 0,
    },
    placements: {
      type: [String],
      enum: [
        "Facebook",
        "Instagram",
        "Messenger",
        "WhatsApp",
        "Threads",
        "Audience Network",
      ],
      default: ["Facebook", "Instagram"],
    },
    // Additional tracking credentials and fields
    status: {
      type: String,
      enum: ["Draft", "Active", "Paused", "Completed", "Failed"],
      default: "Draft",
    },
    facebookCampaignId: {
      type: String, // ID from Facebook/Meta API when created
    },
    facebookAdSetId: {
      type: String,
    },
    facebookAdId: {
      type: String,
    },
    results: {
      impressions: { type: Number, default: 0 },
      clicks: { type: Number, default: 0 },
      spend: { type: Number, default: 0 },
      conversions: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Campaign", CampaignSchema);

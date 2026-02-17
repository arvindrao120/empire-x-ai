import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    facebookId: {
      type: String,
      required: true,
      unique: true,
    },
    displayName: {
      type: String,
    },
    name: {
      givenName: String,
      familyName: String,
    },
    provider: {
      type: String,
      default: "facebook",
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", UserSchema);

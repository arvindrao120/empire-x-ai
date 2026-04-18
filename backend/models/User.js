import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    facebookId: {
      type: String,
      unique: true,
      sparse: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    username: {
      type: String,
      unique: true,
      sparse: true, 
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
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
    photos: [
      {
        type: String,
      },
    ],
    isPublic: {
      type: Boolean,
      default: true,
    },
    accessToken: {
      type: String,        
    },
    birthday: {
      type: String,        
    },
    gender: {
      type: String,        
    },
    location: {
      type: String,        
    },
    hometown: {
      type: String,        
    },
    adAccountId: {
      type: String,        
    },
    adAccountName: {
      type: String,        
    },

    // Platform plan
    plan: {
      type: String,
      enum: ["free", "basic", "pro", "enterprise"],
      default: "free",
    },
    planExpiresAt: {
      type: Date,          
    },
  },
  { timestamps: true },
);

// Hash password before saving
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (err) {
    throw err;
  }
});

// Method to compare password for login
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("User", UserSchema);
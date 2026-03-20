import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import User from "../models/User.js";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `${process.env.BASE_URL}/auth/facebook/callback`,
      profileFields: [
        "id",
        "displayName",
        "name",
        "emails",
        "photos",
        "birthday",
        "gender",
        "location",
        "hometown"
      ],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let adAccountId = null;
        let adAccountName = null;

        try {
          const adAccountsResponse = await axios.get(
            `https://graph.facebook.com/v18.0/me/adaccounts?fields=id,name,account_status&access_token=${accessToken}`
          );

          if (
            adAccountsResponse.data &&
            adAccountsResponse.data.data &&
            adAccountsResponse.data.data.length > 0
          ) {
            adAccountId = adAccountsResponse.data.data[0].id;
            adAccountName = adAccountsResponse.data.data[0].name;
          }
        } catch (apiErr) {
          console.error("Error fetching ad accounts:", apiErr.response?.data || apiErr.message);
        }

        // Extract new fields from Facebook _json object
        const birthday = profile._json.birthday;
        const gender = profile._json.gender;
        const location = profile._json.location ? profile._json.location.name : null;
        const hometown = profile._json.hometown ? profile._json.hometown.name : null;

        let user = await User.findOne({ facebookId: profile.id });



        if (user) {
          // Har baar login pe accessToken update karo
          user.accessToken = accessToken;
          if (adAccountId) user.adAccountId = adAccountId;
          if (adAccountName) user.adAccountName = adAccountName;

          // Update new fields if they exist
          if (birthday) user.birthday = birthday;
          if (gender) user.gender = gender;
          if (location) user.location = location;
          if (hometown) user.hometown = hometown;

          if (
            profile.photos &&
            profile.photos.length > 0 &&
            (!user.photos || user.photos.length === 0)
          ) {
            user.photos = profile.photos.map((p) => p.value);
          }

          await user.save();
          return done(null, user);
        }

        // Naya user banao
        user = new User({
          facebookId: profile.id,
          displayName: profile.displayName,
          name: profile.name,
          photos: profile.photos ? profile.photos.map((p) => p.value) : [],
          accessToken: accessToken, // Save karo!
          adAccountId: adAccountId,
          adAccountName: adAccountName,
          birthday: birthday,
          gender: gender,
          location: location,
          hometown: hometown,
        });

        await user.save();
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    },
  ),
);
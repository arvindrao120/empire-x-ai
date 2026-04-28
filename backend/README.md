# Empire-X Backend

A Node.js web application that implements Facebook authentication using Passport.js, AI Strategy generation, and robust data modeling for meta advertising campaigns.

## Features

- **Production-Ready Secure Authentication:** Robust Auth controller utilizing JWT tokens via cookies with refined API responses.
- **Facebook OAuth & Meta Graph:** Specialized scopes for ads, automatic syncing of Meta Ad Account parameters upon login.
- **AI Strategy Generation:** Integrations with `@google/generative-ai` and `groq-sdk` for automated, intelligent marketing strategy formulation.
- **Campaign Data Modeling:** Deep Mongo schemas for mapping ad sets, budgets, placements, and Facebook/Meta integrations.
- **Admin Management:** Comprehensive admin controller routes for managing user privileges and platform-wide configurations.
- **User Profiles & Photos:** Integration for public profile visibility and dynamically displaying synced photos.
- **MongoDB database integration:** via Mongoose to store User, Campaign, and AI Strategy models.
- **EJS templating engine:** For basic server-side rendering of static views.

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v18 or higher)
- MongoDB
- A Facebook Developer account
- API keys for Google Gemini / Groq

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arvindrao120/empire-x-ai.git
   cd empire-x/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/empire-x
   SESSION_SECRET=your-secret-key-here
   JWT_SECRET=your_jwt_signing_secret
   FACEBOOK_APP_ID=your-facebook-app-id
   FACEBOOK_APP_SECRET=your-facebook-app-secret
   FACEBOOK_CALLBACK_URL=http://localhost:5000/api/auth/facebook/callback
   FRONTEND_URL=http://localhost:5173
   GEMINI_API_KEY=your-gemini-key
   GROQ_API_KEY=your-groq-key
   ```

## Facebook App Setup

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app or use an existing one
3. Add Facebook Login product to your app
4. In the Facebook Login settings, add `http://localhost:5000/api/auth/facebook/callback` as a valid OAuth redirect URI
5. Copy your App ID and App Secret to the `.env` file

## Database Setup

Make sure MongoDB is running on your system. The application will automatically create the database and collections when you first run it.

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The API will be available at `http://localhost:5000`

## Project Structure

```text
backend/
├── app.js                    # Main application file
├── package.json              # Dependencies and scripts
├── config/
│   └── passport.js           # Passport authentication configuration
├── controllers/
│   ├── adminController.js    # Admin management logic
│   ├── aiStrategyController.js # AI strategy generation logic
│   ├── authController.js     # Production-ready authentication handlers
│   ├── campaignController.js # Campaign business logic
│   └── pageController.js     # Static page serving
├── middlewares/              # Custom Express middlewares (auth, errors)
├── models/
│   ├── AIStrategy.js         # AI generated strategy schema
│   ├── Campaign.js           # Campaign and Ads schema
│   └── User.js               # User model schema
├── routes/
│   ├── admin.js              # Admin related routes
│   ├── ai.js                 # AI Strategy Endpoint routes
│   ├── auth.js               # Authentication routes
│   ├── campaign.js           # Campaign management routes
│   └── index.js              # Route orchestrator
├── utils/                    # General backend utilities
├── views/
│   ├── login.ejs             # Login page template
│   └── profile.ejs           # User profile page template
└── README.md                 # Backend Documentation
```

## API Endpoints Summary

- `/api/auth` - Authentication endpoints (Facebook login, logout, user status)
- `/api/campaigns` - Campaign data retrieval and management
- `/api/ai` - AI Strategy generation and storage
- `/api/admin` - Administrative privileges and data overviews

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Passport.js (Facebook Strategy) & JWT
- **AI Tools**: Google Generative AI, Groq SDK
- **API Integration**: Axios (Meta Graph API)
- **Templating**: EJS
- **Session & Cookies**: express-session, cookie-parser
- **Environment Variables**: dotenv

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.

# Empire-X

A Node.js web application that implements Facebook authentication using Passport.js. Users can log in with their Facebook accounts and view their profile information.

## Features

- Secure User Authentication (JWT tokens via cookies)
- Facebook OAuth authentication (with specific scopes for ads)
- Meta Ad Data Integration (fetches and stores user's Ad Accounts)
- User profile and photos display (public visibility support)
- Robust Auth Controller with consistent API responses
- MongoDB database integration
- EJS templating engine
- Responsive design

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB
- A Facebook Developer account

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arvindrao120/empire-x-ai.git
   cd empire-x
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   MONGO_URI=mongodb://localhost:27017/facebook-auth-demo
   SESSION_SECRET=your-secret-key-here
   FACEBOOK_APP_ID=your-facebook-app-id
   FACEBOOK_APP_SECRET=your-facebook-app-secret
   PORT=3000
   BASE_URL=http://localhost:3000
   META_ACCESS_TOKEN=your-meta-access-token
   ```

## Facebook App Setup

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app or use an existing one
3. Add Facebook Login product to your app
4. In the Facebook Login settings, add `http://localhost:3000/auth/facebook/callback` as a valid OAuth redirect URI
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

The application will be available at `http://localhost:3000`

## Project Structure

```
empire-x/
├── app.js                 # Main application file
├── package.json           # Dependencies and scripts
├── config/
│   └── passport.js        # Passport authentication configuration
├── models/
│   └── User.js           # User model schema
├── routes/
│   └── auth.js           # Authentication routes
├── views/
│   ├── login.ejs         # Login page template
│   └── profile.ejs       # User profile page template
└── public/               # Static files (CSS, JS, images)
```

## API Endpoints

- `GET /` - Login page
- `GET /profile` - User profile page (protected)
- `GET /auth/facebook` - Initiate Facebook authentication
- `GET /auth/facebook/callback` - Facebook authentication callback
- `GET /auth/logout` - Logout user

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Passport.js (Facebook Strategy) & JWT
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

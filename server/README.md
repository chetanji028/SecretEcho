# SecretEcho Server

## Setup
1. Navigate to the `server` directory: `cd server`
2. Install dependencies: `npm install`
3. Ensure MongoDB is running locally on port 27017
4. Start the server: `npm run dev`

## Architecture
- **Framework**: Express.js for API handling.
- **Database**: MongoDB for persistent storage.
- **Real-Time**: Socket.io for real-time messaging.
- **Middleware**: Custom middleware for auth, error handling, and logging.
- **Mock AI**: Simple rule-based AI response generator.

## Trade-offs
- JWT secret is hardcoded for simplicity; in production, use environment variables.
- Mock AI is basic to focus on architecture rather than NLP.
- No rate limiting or advanced security for demo purposes.
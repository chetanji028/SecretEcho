# SecretEcho

A real-time, scalable AI companion messaging web app built with React, Next.js, Node.js, Express, MongoDB, and Socket.io.

## Project Structure
- `client/`: Frontend (React + Next.js)
- `server/`: Backend (Node.js + Express + MongoDB)

## Setup Instructions
1. **Prerequisites**:
   - Node.js (>=18.x)
   - MongoDB (running locally on port 27017)
2. **Client Setup**:
   - Navigate to `client/`: `cd client`
   - Install dependencies: `npm install`
   - Start the dev server: `npm run dev`
3. **Server Setup**:
   - Navigate to `server/`: `cd server`
   - Install dependencies: `npm install`
   - Start the server: `npm run dev`
4. Access the app at `http://localhost:3000`

## Architecture Overview
- **Frontend**: Next.js for SSR, React for UI, Socket.io-client for real-time messaging, JWT for authentication.
- **Backend**: Express.js for REST API, MongoDB for data storage, Socket.io for real-time communication, JWT for auth.
- **Scalability**: Modular folder structure, middleware for logging/error handling, MongoDB for scalable storage.
- **Mock AI**: Simple rule-based response generator to simulate AI companion.

## Design Decisions
- **Next.js**: Chosen for SSR and routing simplicity.
- **Socket.io**: Used for real-time bidirectional communication.
- **MongoDB**: Flexible schema for message and user data.
- **JWT**: Lightweight auth mechanism for stateless sessions.

## Known Trade-offs/Limitations
- Hardcoded JWT secret for simplicity (use env vars in production).
- Basic mock AI to focus on architecture rather than NLP.
- Minimal UI polish to prioritize functionality and scalability.
- No advanced security features (e.g., rate limiting, CSRF protection) for demo purposes.

## Future Improvements
- Integrate a real AI model (e.g., via xAI's API: https://x.ai/api).
- Add end-to-end encryption for messages.
- Implement rate limiting and advanced security.
- Enhance UI/UX with a modern design framework (e.g., Tailwind CSS).
# SecretEcho Client

## Setup
1. Navigate to the `client` directory: `cd client`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Architecture
- **Framework**: Next.js for server-side rendering and routing.
- **Components**: Modular, reusable components (`AuthForm`, `ChatWindow`, etc.).
- **State Management**: Local state with React hooks.
- **Real-Time**: Socket.io for real-time messaging.
- **Styling**: Scoped CSS with JSX styles for simplicity.

## Trade-offs
- Scoped CSS limits reusability but simplifies development.
- No advanced state management (e.g., Redux) to keep the project lightweight.
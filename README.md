# LocalBird 🐦

LocalBird is a fully local, mock-Twitter web application built with React and Vite. It allows you to experience a timeline-based social media interface locally, complete with simulated automated 'personas' that interact with the tweets you post!

**Live Demo**: [https://ariesyous.github.io/localbird/](https://ariesyous.github.io/localbird/)

## Features

- **Premium UI**: Features a sleek dark-mode, glassmorphism design crafted with vanilla CSS.
- **Local State**: All tweets and interactions are managed locally in the browser's state. No external databases or authentication required.
- **Simulated Personas**: Post a tweet and watch as distinct personas (like the Crypto Bro, the Doomsday Prepper, and the Cat Lady) reply automatically. Their responses react contextually based on the keywords in your tweet!

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ariesyous/localbird.git
   ```
2. Navigate into the project directory:
   ```bash
   cd localbird
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`.

## Architecture

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
- **Deployment**: GitHub Pages

## Project Structure
- `src/components/`: Modular React components for the Feed, Sidebar, RightPanel, and individual Tweets.
- `src/services/`:`personaService.js` handles the logic for scanning tweet text and generating automated replies from our cast of characters.
- `src/store/`: `TweetContext.jsx` provides the global state for adding tweets and handling "likes".

## Deployment

The project is configured to deploy easily to GitHub Pages. To deploy a new version:
```bash
npm run deploy
```

## License
MIT

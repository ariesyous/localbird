import React from 'react';
import { TweetProvider } from './store/TweetContext';
import Sidebar from './components/Sidebar';
import MainFeed from './components/MainFeed';
import RightPanel from './components/RightPanel';
import './index.css';

function App() {
  return (
    <TweetProvider>
      <div className="app-container">
        <Sidebar />
        <MainFeed />
        <RightPanel />
      </div>
    </TweetProvider>
  );
}

export default App;

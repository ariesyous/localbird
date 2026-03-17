import React from 'react';
import TweetBox from './TweetBox';
import Tweet from './Tweet';
import { useTweets } from '../store/TweetContext';

const MainFeed = () => {
    const { tweets } = useTweets();

    return (
        <div className="main-feed">
            <div className="feed-header glass-panel" style={{ borderRadius: '0 0 16px 16px', padding: '15px' }}>
                Home
            </div>

            <TweetBox />

            <div className="tweet-list">
                {tweets.map(tweet => (
                    <Tweet key={tweet.id} tweet={tweet} />
                ))}
            </div>
        </div>
    );
};

export default MainFeed;

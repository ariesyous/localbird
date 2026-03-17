import React from 'react';
import { useTweets } from '../store/TweetContext';

const Tweet = ({ tweet }) => {
    const { toggleLike } = useTweets();

    return (
        <div className="tweet-thread">
            <div className="tweet-card glass-panel">
                <div className="avatar" style={{ fontSize: '24px' }}>
                    {tweet.author.avatar}
                </div>
                <div className="tweet-content">
                    <div className="tweet-header">
                        <span className="tweet-name">{tweet.author.name}</span>
                        <span className="tweet-handle">{tweet.author.handle}</span>
                        <span className="tweet-time">· just now</span>
                    </div>
                    <div className="tweet-text">{tweet.text}</div>
                    <div className="tweet-actions">
                        <button className="action-btn">
                            <span role="img" aria-label="reply">💬</span> {tweet.replies?.length || 0}
                        </button>
                        <button className="action-btn">
                            <span role="img" aria-label="retweet">🔁</span> 0
                        </button>
                        <button className="action-btn action-like" onClick={() => toggleLike(tweet.id)}>
                            <span role="img" aria-label="like">❤️</span> {tweet.likes || 0}
                        </button>
                    </div>
                </div>
            </div>

            {/* Replies */}
            {tweet.replies && tweet.replies.length > 0 && (
                <div className="replies-container">
                    {tweet.replies.map(reply => (
                        <div key={reply.id} className="reply-card">
                            <div className="tweet-header">
                                <span className="avatar" style={{ width: '24px', height: '24px', fontSize: '14px', marginRight: '6px' }}>{reply.author.avatar}</span>
                                <span className="tweet-name">{reply.author.name}</span>
                                <span className="tweet-handle">{reply.author.handle}</span>
                            </div>
                            <div className="tweet-text" style={{ fontSize: '14px' }}>{reply.text}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Tweet;

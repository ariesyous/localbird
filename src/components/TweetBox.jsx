import React, { useState } from 'react';
import { useTweets } from '../store/TweetContext';

const TweetBox = () => {
    const [text, setText] = useState('');
    const { addTweet } = useTweets();

    const handleSubmit = () => {
        if (text.trim() === '') return;
        addTweet(text);
        setText('');
    };

    return (
        <div className="tweet-box glass-panel">
            <div className="avatar">👤</div>
            <div className="tweet-box-content">
                <textarea
                    className="tweet-input"
                    placeholder="What's happening locally?"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    maxLength={280}
                />
                <div className="tweet-box-actions">
                    <button
                        className="btn-primary"
                        onClick={handleSubmit}
                        disabled={text.length === 0}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TweetBox;

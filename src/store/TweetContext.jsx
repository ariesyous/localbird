import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { generatePersonaReply } from '../services/personaService';

const TweetContext = createContext();

const initialState = {
  tweets: [
    {
      id: 'initial_1',
      author: {
        name: 'LocalBird Admin',
        handle: '@admin',
        avatar: '🐦',
      },
      text: 'Welcome to LocalBird! Try posting a tweet and see who replies.',
      timestamp: new Date().toISOString(),
      likes: 10,
      replies: []
    }
  ]
};

function tweetReducer(state, action) {
  switch (action.type) {
    case 'ADD_TWEET':
      return {
        ...state,
        tweets: [action.payload, ...state.tweets]
      };
    case 'ADD_REPLY': {
      const { targetTweetId, reply } = action.payload;
      return {
        ...state,
        tweets: state.tweets.map(tweet => {
          if (tweet.id === targetTweetId) {
            return {
              ...tweet,
              replies: [...tweet.replies, reply]
            };
          }
          return tweet;
        })
      };
    }
    case 'TOGGLE_LIKE': {
      return {
        ...state,
        tweets: state.tweets.map(tweet => {
          if (tweet.id === action.payload) {
            return {
              ...tweet,
              likes: tweet.likes + 1, // simplified liking
            };
          }
          return tweet;
        })
      };
    }
    default:
      return state;
  }
}

export function TweetProvider({ children }) {
  const [state, dispatch] = useReducer(tweetReducer, initialState);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now().toString(),
      author: {
        name: 'You',
        handle: '@local_user',
        avatar: '👤'
      },
      text,
      timestamp: new Date().toISOString(),
      likes: 0,
      replies: []
    };
    
    dispatch({ type: 'ADD_TWEET', payload: newTweet });

    // Simulate delayed persona replies
    const numberOfReplies = Math.floor(Math.random() * 2) + 1; // 1 to 2 replies
    
    for (let i = 0; i < numberOfReplies; i++) {
        setTimeout(() => {
            const generatedReply = generatePersonaReply(text);
            const replyObj = {
                id: Date.now().toString() + i,
                ...generatedReply
            };
            dispatch({ 
                type: 'ADD_REPLY', 
                payload: { targetTweetId: newTweet.id, reply: replyObj } 
            });
        }, 1500 + Math.random() * 3000 * (i + 1)); // Stagger replies
    }
  };

  const toggleLike = (id) => {
    dispatch({ type: 'TOGGLE_LIKE', payload: id });
  };

  return (
    <TweetContext.Provider value={{ tweets: state.tweets, addTweet, toggleLike }}>
      {children}
    </TweetContext.Provider>
  );
}

export const useTweets = () => useContext(TweetContext);

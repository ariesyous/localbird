import React from 'react';
import { PERSONAS } from '../services/personaService';

const RightPanel = () => {
    return (
        <div className="right-panel">
            <div className="trending-box glass-panel">
                <h2>What's happening</h2>

                <div className="trend-item">
                    <span className="trend-category">Trending in Tech</span>
                    <span className="trend-name">#Web3Locally</span>
                    <span className="trend-tweets">120K Tweets</span>
                </div>

                <div className="trend-item">
                    <span className="trend-category">Politics · Trending</span>
                    <span className="trend-name">Bunker Bill</span>
                    <span className="trend-tweets">10K Tweets</span>
                </div>

                <div className="trend-item">
                    <span className="trend-category">Entertainment · Trending</span>
                    <span className="trend-name">Cat Videos</span>
                    <span className="trend-tweets">2.5M Tweets</span>
                </div>
            </div>

            <div className="who-to-follow glass-panel">
                <h2>Who to follow</h2>
                {PERSONAS.slice(0, 3).map(persona => (
                    <div key={persona.id} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <div className="avatar" style={{ width: '40px', height: '40px', fontSize: '20px' }}>
                            {persona.avatar}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <span style={{ fontWeight: 700, fontSize: '14px' }}>{persona.name}</span>
                            <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{persona.handle}</span>
                        </div>
                        <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '13px' }}>Follow</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RightPanel;

import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar glass-panel">
            <div className="logo-container">
                <span style={{ fontSize: '32px' }}>🐦</span>
                <span>LocalBird</span>
            </div>

            <div className="nav-item active">
                <span>🏠</span>
                <span>Home</span>
            </div>
            <div className="nav-item">
                <span>🔍</span>
                <span>Explore</span>
            </div>
            <div className="nav-item">
                <span>🔔</span>
                <span>Notifications</span>
            </div>
            <div className="nav-item">
                <span>✉️</span>
                <span>Messages</span>
            </div>
            <div className="nav-item">
                <span>👤</span>
                <span>Profile</span>
            </div>

            <button className="btn-primary" style={{ marginTop: '20px', width: '100%', padding: '15px' }}>
                Post
            </button>
        </div>
    );
};

export default Sidebar;

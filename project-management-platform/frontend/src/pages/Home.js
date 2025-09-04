import React, { useState } from 'react';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className="app">
            <Header />

            <div className="main-content">
                <div className="projects-grid">
                    {/* Projects Section */}
                    <div className="wireframe-card">
                        <div className="wireframe-header">
                            <div className="wireframe-icon"></div>
                            <div className="wireframe-icon"></div>
                            <span>Projects</span>
                            <div className="wireframe-icon"></div>
                            <div className="wireframe-icon"></div>
                            <div className="wireframe-icon"></div>
                            <div className="wireframe-icon"></div>
                        </div>
                        <div className="wireframe-content">
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', height: '100%' }}>
                                <div className="project-card">Project A</div>
                                <div className="project-card">Project B</div>
                            </div>
                        </div>
                    </div>

                    {/* Local Home Section */}
                    <div className="wireframe-card">
                        <div className="wireframe-header">
                            <div className="wireframe-icon"></div>
                            <span>Local</span>
                            <div className="wireframe-icon"></div>
                            <div className="wireframe-icon"></div>
                            <div className="wireframe-icon"></div>
                            <div className="wireframe-icon"></div>
                        </div>
                        <div className="wireframe-content">
                            <div className="filter-section">
                                <div className="filter-button">Sort:</div>
                                <div className="filter-button">Filter:</div>
                            </div>
                        </div>
                    </div>

                    {/* Global Home Section */}
                    <div className="wireframe-card">
                        <div className="wireframe-header">
                            <div className="wireframe-icon"></div>
                            <span>Global</span>
                            <div className="wireframe-icon"></div>
                            <div className="wireframe-icon"></div>
                            <div className="wireframe-icon"></div>
                            <div className="wireframe-icon"></div>
                        </div>
                        <div className="wireframe-content">
                            <div className="filter-section">
                                <div className="filter-button">Sort:</div>
                                <div className="filter-button">Filter:</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Section */}
                <div className="wireframe-card" style={{ marginTop: '2rem', position: 'relative' }}>
                    <div className="wireframe-header">
                        <div className="wireframe-icon"></div>
                        <span>Profile</span>
                        <div className="wireframe-icon"></div>
                        <div className="wireframe-icon"></div>
                        <div className="wireframe-icon"></div>
                        <div className="wireframe-icon"></div>
                    </div>
                    <div className="messages-tab">Messages</div>
                    <div className="wireframe-content">
                        <div className="profile-grid">
                            <div className="profile-section">
                                <h4>Details</h4>
                            </div>
                            <div className="profile-section">
                                <h4>Current Tasks</h4>
                                <div style={{ background: '#f0f0f0', height: '20px', margin: '0.5rem 0', borderRadius: '2px' }}></div>
                                <div style={{ background: '#f0f0f0', height: '20px', margin: '0.5rem 0', borderRadius: '2px' }}></div>
                                <div style={{ background: '#e0e0e0', height: '20px', margin: '0.5rem 0', borderRadius: '2px' }}></div>
                            </div>
                            <div className="profile-section">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
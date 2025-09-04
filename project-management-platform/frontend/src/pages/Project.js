import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ProjectComponent from '../components/ProjectComponent';
import EditProject from '../components/EditProject';
import FilesComponent from '../components/FilesComponent';
import MessagesComponent from '../components/MessagesComponent';

const Project = () => {
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="project-container">
            <Header />

            <main className="main-content">
                <div className="project-header">
                    <ProjectComponent
                        projectId={id}
                        onEdit={() => setIsEditing(true)}
                    />
                </div>

                <div className="project-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        Overview
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'files' ? 'active' : ''}`}
                        onClick={() => setActiveTab('files')}
                    >
                        Files
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'messages' ? 'active' : ''}`}
                        onClick={() => setActiveTab('messages')}
                    >
                        Messages
                    </button>
                </div>

                <div className="project-content">
                    {activeTab === 'overview' && (
                        <div className="overview-section">
                            {isEditing ? (
                                <EditProject
                                    projectId={id}
                                    onSave={() => setIsEditing(false)}
                                    onCancel={() => setIsEditing(false)}
                                />
                            ) : (
                                <div className="project-overview">
                                    <div className="overview-card">
                                        <h3>Description</h3>
                                        <p>This is a comprehensive project management platform designed to streamline
                                            team collaboration and project tracking. The platform includes features for
                                            task management, file sharing, and real-time communication.</p>
                                    </div>
                                    <div className="overview-card">
                                        <h3>Team Members</h3>
                                        <div className="team-list">
                                            <div className="team-member">
                                                <div className="member-avatar">JS</div>
                                                <span>John Smith - Lead Developer</span>
                                            </div>
                                            <div className="team-member">
                                                <div className="member-avatar">AD</div>
                                                <span>Alice Davis - UI/UX Designer</span>
                                            </div>
                                            <div className="team-member">
                                                <div className="member-avatar">MJ</div>
                                                <span>Mike Johnson - Project Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overview-card">
                                        <h3>Project Status</h3>
                                        <div className="status-info">
                                            <div className="status-item">
                                                <span className="status-label">Progress:</span>
                                                <div className="progress-bar">
                                                    <div className="progress-fill" style={{ width: '65%' }}></div>
                                                </div>
                                                <span>65%</span>
                                            </div>
                                            <div className="status-item">
                                                <span className="status-label">Due Date:</span>
                                                <span>December 15, 2025</span>
                                            </div>
                                            <div className="status-item">
                                                <span className="status-label">Priority:</span>
                                                <span className="priority high">High</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'files' && (
                        <FilesComponent projectId={id} />
                    )}

                    {activeTab === 'messages' && (
                        <MessagesComponent projectId={id} />
                    )}
                </div>
            </main>
        </div>
    );
};

export default Project;
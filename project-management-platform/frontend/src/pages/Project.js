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
        <div className="project-container wireframe">
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
                        <div className="overview-section wireframe-content">
                            {isEditing ? (
                                <EditProject
                                    projectId={id}
                                    onSave={() => setIsEditing(false)}
                                    onCancel={() => setIsEditing(false)}
                                />
                            ) : (
                                <div className="project-overview">
                                    <div className="overview-card">Description</div>
                                    <div className="overview-card">Team Members</div>
                                    <div className="overview-card">Project Status</div>
                                </div>
                            )}
                        </div>
                    )}
                    {activeTab === 'files' && <FilesComponent projectId={id} />}
                    {activeTab === 'messages' && <MessagesComponent projectId={id} />}
                </div>
            </main>
        </div>
    );
};

export default Project;
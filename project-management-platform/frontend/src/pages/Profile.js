import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ProfileComponent from '../components/ProfileComponent';
import EditProfile from '../components/EditProfile';
import ProjectsList from '../components/ProjectsList';
import FriendsList from '../components/FriendsList';
import CreateProject from '../components/CreateProject';

const Profile = () => {
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);
    const [showCreateProject, setShowCreateProject] = useState(false);
    const [activeTab, setActiveTab] = useState('details');

    // Mock check if this is current user's profile
    const isOwnProfile = id === 'current' || id === '1';

    return (
        <div className="profile-container">
            <Header />

            <main className="main-content">
                <div className="profile-header">
                    <ProfileComponent
                        userId={id}
                        isOwnProfile={isOwnProfile}
                        onEdit={() => setIsEditing(true)}
                    />
                </div>

                <div className="profile-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
                        onClick={() => setActiveTab('details')}
                    >
                        Details
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
                        onClick={() => setActiveTab('projects')}
                    >
                        Projects
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'friends' ? 'active' : ''}`}
                        onClick={() => setActiveTab('friends')}
                    >
                        Connections
                    </button>
                </div>

                <div className="profile-content">
                    {activeTab === 'details' && (
                        <div className="details-section">
                            {isEditing ? (
                                <EditProfile
                                    userId={id}
                                    onSave={() => setIsEditing(false)}
                                    onCancel={() => setIsEditing(false)}
                                />
                            ) : (
                                <div className="profile-details">
                                    <div className="detail-card">
                                        <h3>About</h3>
                                        <p>Experienced project manager with a passion for delivering high-quality results.
                                            Specializes in agile methodologies and cross-functional team leadership.</p>
                                    </div>
                                    <div className="detail-card">
                                        <h3>Skills</h3>
                                        <div className="skills-list">
                                            <span className="skill-tag">Project Management</span>
                                            <span className="skill-tag">Agile/Scrum</span>
                                            <span className="skill-tag">Team Leadership</span>
                                            <span className="skill-tag">Strategic Planning</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'projects' && (
                        <div className="projects-section">
                            {isOwnProfile && (
                                <button
                                    className="create-btn"
                                    onClick={() => setShowCreateProject(true)}
                                >
                                    + Create New Project
                                </button>
                            )}
                            <ProjectsList userId={id} />

                            {showCreateProject && (
                                <CreateProject onClose={() => setShowCreateProject(false)} />
                            )}
                        </div>
                    )}

                    {activeTab === 'friends' && (
                        <div className="friends-section">
                            <FriendsList userId={id} />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Profile;
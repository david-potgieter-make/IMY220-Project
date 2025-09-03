import React from 'react';
import { Link } from 'react-router-dom';

const ProfileComponent = ({ userId, isOwnProfile, onEdit }) => {
    // Mock user data
    const getUserData = (userId) => {
        const users = {
            '1': {
                id: '1',
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                avatar: 'JD',
                bio: 'Experienced project manager with a passion for delivering high-quality results.',
                location: 'San Francisco, CA',
                joinDate: '2024-01-15',
                projectCount: 12,
                connectionsCount: 45,
                skills: ['Project Management', 'Agile/Scrum', 'Team Leadership', 'Strategic Planning']
            },
            '2': {
                id: '2',
                firstName: 'Jane',
                lastName: 'Smith',
                email: 'jane.smith@example.com',
                avatar: 'JS',
                bio: 'Full-stack developer specializing in modern web technologies.',
                location: 'New York, NY',
                joinDate: '2024-03-20',
                projectCount: 8,
                connectionsCount: 32,
                skills: ['React', 'Node.js', 'TypeScript', 'Database Design']
            }
        };

        return users[userId] || users['1'];
    };

    const user = getUserData(userId === 'current' ? '1' : userId);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long'
        });
    };

    return (
        <div className="profile-component">
            <div className="profile-main">
                <div className="profile-avatar-section">
                    <div className="profile-avatar large">{user.avatar}</div>
                    {isOwnProfile && (
                        <button className="edit-avatar-btn" title="Change avatar">
                            📷
                        </button>
                    )}
                </div>

                <div className="profile-info">
                    <div className="profile-name-section">
                        <h1 className="profile-name">{user.firstName} {user.lastName}</h1>
                        {isOwnProfile && (
                            <button className="edit-profile-btn" onClick={onEdit}>
                                Edit Profile
                            </button>
                        )}
                    </div>

                    <div className="profile-details">
                        <div className="profile-detail">
                            <span className="detail-icon">📧</span>
                            <span className="detail-text">{user.email}</span>
                        </div>

                        <div className="profile-detail">
                            <span className="detail-icon">📍</span>
                            <span className="detail-text">{user.location}</span>
                        </div>

                        <div className="profile-detail">
                            <span className="detail-icon">📅</span>
                            <span className="detail-text">Joined {formatDate(user.joinDate)}</span>
                        </div>
                    </div>

                    <p className="profile-bio">{user.bio}</p>

                    <div className="profile-stats">
                        <div className="stat-item">
                            <span className="stat-number">{user.projectCount}</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">{user.connectionsCount}</span>
                            <span className="stat-label">Connections</span>
                        </div>
                    </div>

                    {!isOwnProfile && (
                        <div className="profile-actions">
                            <button className="action-btn primary">Connect</button>
                            <button className="action-btn secondary">Message</button>
                        </div>
                    )}
                </div>
            </div>

            <div className="profile-skills">
                <h3>Skills</h3>
                <div className="skills-list">
                    {user.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;
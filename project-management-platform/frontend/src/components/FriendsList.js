import React from 'react';
import { Link } from 'react-router-dom';

const FriendsList = ({ userId }) => {
    // Mock friends data
    const mockFriends = [
        {
            id: '2',
            firstName: 'Jane',
            lastName: 'Smith',
            avatar: 'JS',
            title: 'Full Stack Developer',
            location: 'New York, NY',
            mutualConnections: 12,
            status: 'online'
        },
        {
            id: '3',
            firstName: 'Mike',
            lastName: 'Johnson',
            avatar: 'MJ',
            title: 'Project Manager',
            location: 'Chicago, IL',
            mutualConnections: 8,
            status: 'offline'
        },
        {
            id: '4',
            firstName: 'Sarah',
            lastName: 'Wilson',
            avatar: 'SW',
            title: 'UX Designer',
            location: 'Seattle, WA',
            mutualConnections: 15,
            status: 'online'
        },
        {
            id: '5',
            firstName: 'David',
            lastName: 'Brown',
            avatar: 'DB',
            title: 'Data Scientist',
            location: 'Austin, TX',
            mutualConnections: 6,
            status: 'away'
        },
        {
            id: '6',
            firstName: 'Lisa',
            lastName: 'Garcia',
            avatar: 'LG',
            title: 'Marketing Manager',
            location: 'Los Angeles, CA',
            mutualConnections: 9,
            status: 'online'
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'online': return 'status-online';
            case 'away': return 'status-away';
            case 'offline': return 'status-offline';
            default: return 'status-offline';
        }
    };

    return (
        <div className="friends-list">
            <div className="friends-list-header">
                <h3>Connections</h3>
                <span className="friends-count">
                    {mockFriends.length} connection{mockFriends.length !== 1 ? 's' : ''}
                </span>
            </div>

            <div className="friends-grid">
                {mockFriends.map(friend => (
                    <div key={friend.id} className="friend-card">
                        <div className="friend-header">
                            <div className="friend-avatar-container">
                                <div className="friend-avatar">{friend.avatar}</div>
                                <div className={`status-indicator ${getStatusColor(friend.status)}`}></div>
                            </div>

                            <div className="friend-info">
                                <h4 className="friend-name">
                                    <Link to={`/profile/${friend.id}`}>
                                        {friend.firstName} {friend.lastName}
                                    </Link>
                                </h4>
                                <p className="friend-title">{friend.title}</p>
                                <p className="friend-location">{friend.location}</p>
                            </div>
                        </div>

                        <div className="friend-meta">
                            <span className="mutual-connections">
                                {friend.mutualConnections} mutual connections
                            </span>
                        </div>

                        <div className="friend-actions">
                            <button className="action-btn message-btn">Message</button>
                            <button className="action-btn view-btn">
                                <Link to={`/profile/${friend.id}`}>View Profile</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {mockFriends.length === 0 && (
                <div className="no-friends">
                    <p>No connections yet</p>
                    <p>Start connecting with other users to build your network!</p>
                </div>
            )}
        </div>
    );
};

export default FriendsList;
import React, { useState } from 'react';

const MessagesComponent = ({ projectId }) => {
    const [messages, setMessages] = useState([
        {
            id: '1',
            type: 'check-in',
            author: { id: '1', name: 'John Doe', avatar: 'JD' },
            message: 'Started working on the user authentication module. Expected completion by end of week.',
            timestamp: '2025-08-30T09:30:00Z',
            attachments: []
        },
        {
            id: '2',
            type: 'update',
            author: { id: '2', name: 'Jane Smith', avatar: 'JS' },
            message: 'Completed the wireframes for the dashboard. Ready for review.',
            timestamp: '2025-08-30T11:15:00Z',
            attachments: ['wireframes.sketch']
        },
        {
            id: '3',
            type: 'check-out',
            author: { id: '3', name: 'Mike Johnson', avatar: 'MJ' },
            message: 'Finished database schema design. All tables and relationships are documented.',
            timestamp: '2025-08-30T17:45:00Z',
            attachments: ['database-schema.sql']
        },
        {
            id: '4',
            type: 'issue',
            author: { id: '1', name: 'John Doe', avatar: 'JD' },
            message: 'Encountered an issue with third-party API integration. Need to discuss alternative solutions.',
            timestamp: '2025-08-31T10:20:00Z',
            attachments: []
        },
        {
            id: '5',
            type: 'check-in',
            author: { id: '2', name: 'Jane Smith', avatar: 'JS' },
            message: 'Beginning frontend implementation based on approved wireframes. Will update progress daily.',
            timestamp: '2025-09-01T08:45:00Z',
            attachments: []
        }
    ]);

    const [newMessage, setNewMessage] = useState('');
    const [messageType, setMessageType] = useState('update');

    const getMessageTypeIcon = (type) => {
        const icons = {
            'check-in': '🟢',
            'check-out': '🔴',
            'update': '📝',
            'issue': '⚠️',
            'milestone': '🎯'
        };
        return icons[type] || '💬';
    };

    const getMessageTypeLabel = (type) => {
        const labels = {
            'check-in': 'Check In',
            'check-out': 'Check Out',
            'update': 'Update',
            'issue': 'Issue',
            'milestone': 'Milestone'
        };
        return labels[type] || 'Message';
    };

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffInMinutes = Math.floor((now - date) / (1000 * 60));

        if (diffInMinutes < 1) return 'Just now';
        if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;

        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) return `${diffInHours} hours ago`;

        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays < 7) return `${diffInDays} days ago`;

        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newMessage.trim()) return;

        const message = {
            id: Date.now().toString(),
            type: messageType,
            author: { id: '1', name: 'John Doe', avatar: 'JD' }, // Current user
            message: newMessage.trim(),
            timestamp: new Date().toISOString(),
            attachments: []
        };

        setMessages(prev => [message, ...prev]);
        setNewMessage('');
    };

    return (
        <div className="messages-component">
            <div className="messages-header">
                <h3>Project Messages</h3>
                <span className="messages-count">{messages.length} messages</span>
            </div>

            <div className="new-message-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-header">
                        <select
                            value={messageType}
                            onChange={(e) => setMessageType(e.target.value)}
                            className="message-type-select"
                        >
                            <option value="check-in">Check In</option>
                            <option value="check-out">Check Out</option>
                            <option value="update">Update</option>
                            <option value="issue">Issue</option>
                            <option value="milestone">Milestone</option>
                        </select>
                    </div>

                    <textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder={`Write your ${getMessageTypeLabel(messageType).toLowerCase()}...`}
                        className="message-input"
                        rows="3"
                    />

                    <div className="form-actions">
                        <button type="submit" className="post-btn" disabled={!newMessage.trim()}>
                            Post {getMessageTypeLabel(messageType)}
                        </button>
                    </div>
                </form>
            </div>

            <div className="messages-list">
                {messages.length === 0 ? (
                    <div className="no-messages">
                        <p>No messages yet</p>
                        <p>Be the first to post a project update</p>
                    </div>
                ) : (
                    messages.map(message => (
                        <article key={message.id} className="message-item">
                            <div className="message-header">
                                <div className="message-author">
                                    <div className="author-avatar">{message.author.avatar}</div>
                                    <div className="author-info">
                                        <span className="author-name">{message.author.name}</span>
                                        <div className="message-meta">
                                            <span className="message-type">
                                                {getMessageTypeIcon(message.type)} {getMessageTypeLabel(message.type)}
                                            </span>
                                            <span className="message-time">{formatTimestamp(message.timestamp)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="message-content">
                                <p>{message.message}</p>

                                {message.attachments.length > 0 && (
                                    <div className="message-attachments">
                                        <span className="attachments-label">Attachments:</span>
                                        {message.attachments.map((attachment, index) => (
                                            <span key={index} className="attachment-item">
                                                📎 {attachment}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))
                )}
            </div>
        </div>
    );
};

export default MessagesComponent;
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPreview = ({ project, showOwner = false }) => {
    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'active': return 'status-active';
            case 'in progress': return 'status-progress';
            case 'planning': return 'status-planning';
            case 'completed': return 'status-completed';
            case 'on hold': return 'status-hold';
            default: return 'status-default';
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority.toLowerCase()) {
            case 'high': return 'priority-high';
            case 'medium': return 'priority-medium';
            case 'low': return 'priority-low';
            default: return 'priority-default';
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <article className="project-preview">
            <div className="project-preview-header">
                <div className="project-title-section">
                    <h3 className="project-title">
                        <Link to={`/project/${project.id}`}>{project.title}</Link>
                    </h3>
                    <div className="project-meta">
                        <span className={`status-badge ${getStatusColor(project.status)}`}>
                            {project.status}
                        </span>
                        <span className={`priority-badge ${getPriorityColor(project.priority)}`}>
                            {project.priority}
                        </span>
                    </div>
                </div>

                {showOwner && (
                    <div className="project-owner">
                        <Link to={`/profile/${project.owner.id}`} className="owner-link">
                            <div className="owner-avatar">{project.owner.avatar}</div>
                            <span className="owner-name">{project.owner.name}</span>
                        </Link>
                    </div>
                )}
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-progress">
                <div className="progress-header">
                    <span className="progress-label">Progress</span>
                    <span className="progress-value">{project.progress}%</span>
                </div>
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${project.progress}%` }}
                    ></div>
                </div>
            </div>

            <div className="project-footer">
                <div className="project-tags">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>

                <div className="project-date">
                    Created {formatDate(project.createdAt)}
                </div>
            </div>
        </article>
    );
};

export default ProjectPreview;
import React from 'react';
import ProjectPreview from './ProjectPreview';

const ProjectsList = ({ userId }) => {
    // Mock projects data based on userId
    const getUserProjects = (userId) => {
        const allProjects = [
            {
                id: '1',
                title: 'E-Commerce Platform',
                description: 'Building a modern e-commerce solution with React and Node.js',
                owner: { id: '1', name: 'John Doe', avatar: 'JD' },
                createdAt: '2025-08-15',
                status: 'Active',
                priority: 'High',
                progress: 75,
                tags: ['React', 'Node.js', 'MongoDB']
            },
            {
                id: '2',
                title: 'Mobile App Development',
                description: 'Cross-platform mobile application for project management',
                owner: { id: '1', name: 'John Doe', avatar: 'JD' },
                createdAt: '2025-08-20',
                status: 'In Progress',
                priority: 'Medium',
                progress: 45,
                tags: ['React Native', 'TypeScript']
            },
            {
                id: '3',
                title: 'Data Analytics Dashboard',
                description: 'Real-time analytics dashboard for business intelligence',
                owner: { id: '2', name: 'Jane Smith', avatar: 'JS' },
                createdAt: '2025-08-25',
                status: 'Planning',
                priority: 'Low',
                progress: 20,
                tags: ['Python', 'D3.js', 'PostgreSQL']
            }
        ];

        // Filter projects by user
        if (userId === 'current' || userId === '1') {
            return allProjects.filter(p => p.owner.id === '1');
        }

        return allProjects.filter(p => p.owner.id === userId);
    };

    const userProjects = getUserProjects(userId);

    return (
        <div className="projects-list">
            <div className="projects-list-header">
                <h3>Projects</h3>
                <span className="project-count">
                    {userProjects.length} project{userProjects.length !== 1 ? 's' : ''}
                </span>
            </div>

            <div className="projects-list-content">
                {userProjects.length === 0 ? (
                    <div className="no-projects">
                        <p>No projects found</p>
                        <p>Start by creating your first project!</p>
                    </div>
                ) : (
                    userProjects.map(project => (
                        <ProjectPreview
                            key={project.id}
                            project={project}
                            showOwner={false}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default ProjectsList;
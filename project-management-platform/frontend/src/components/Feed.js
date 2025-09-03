import React from 'react';
import ProjectPreview from './ProjectPreview';

const Feed = ({ feedType, searchTerm }) => {
    // Mock project data
    const mockProjects = [
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
            owner: { id: '2', name: 'Jane Smith', avatar: 'JS' },
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
            owner: { id: '3', name: 'Mike Johnson', avatar: 'MJ' },
            createdAt: '2025-08-25',
            status: 'Planning',
            priority: 'Low',
            progress: 20,
            tags: ['Python', 'D3.js', 'PostgreSQL']
        },
        {
            id: '4',
            title: 'AI Chatbot Integration',
            description: 'Implementing intelligent chatbot for customer support',
            owner: { id: '4', name: 'Sarah Wilson', avatar: 'SW' },
            createdAt: '2025-08-30',
            status: 'Active',
            priority: 'High',
            progress: 60,
            tags: ['Python', 'TensorFlow', 'NLP']
        }
    ];

    // Filter projects based on feed type and search term
    const filteredProjects = mockProjects.filter(project => {
        const matchesSearch = searchTerm === '' ||
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.owner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        // For local feed, show projects from current user or connections
        // For global feed, show all projects
        if (feedType === 'local') {
            return matchesSearch && ['1', '2'].includes(project.owner.id);
        }

        return matchesSearch;
    });

    return (
        <div className="feed">
            <div className="feed-header">
                <h2>{feedType === 'local' ? 'Local Projects' : 'All Projects'}</h2>
                <span className="project-count">
                    {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                </span>
            </div>

            <div className="feed-content">
                {filteredProjects.length === 0 ? (
                    <div className="no-results">
                        <p>No projects found</p>
                        {searchTerm && <p>Try adjusting your search terms</p>}
                    </div>
                ) : (
                    filteredProjects.map(project => (
                        <ProjectPreview
                            key={project.id}
                            project={project}
                            showOwner={true}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Feed;
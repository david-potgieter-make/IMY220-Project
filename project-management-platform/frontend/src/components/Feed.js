import React from 'react';
import ProjectPreview from './ProjectPreview';

const Feed = ({ feedType = 'global', searchTerm = '' }) => {
    const mockProjects = [
        // Your existing mockProjects data
    ];

    const filteredProjects = mockProjects.filter(project => {
        const matchesSearch = searchTerm === '' ||
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.owner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        if (feedType === 'local') {
            return matchesSearch && ['1', '2'].includes(project.owner.id);
        }
        return matchesSearch;
    });

    return (
        <div className="feed wireframe">
            <div className="feed-header">
                <h2>{feedType === 'local' ? 'Local Feed' : 'Global Feed'}</h2>
                <span className="project-count">
                    {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                </span>
            </div>
            <div className="feed-content">
                {filteredProjects.length === 0 ? (
                    <div className="no-results wireframe-content">
                        <div className="wireframe-card">No projects</div>
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
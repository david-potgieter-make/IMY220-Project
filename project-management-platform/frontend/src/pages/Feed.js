import React from 'react';
import ProjectPreview from '../components/ProjectPreview';
import Header from '../components/Header';

const Feed = ({ feedType = 'global', searchTerm = '' }) => {
    // Comprehensive mock projects data
    const mockProjects = [
        {
            id: '1',
            title: 'E-Commerce Platform',
            description: 'Building a modern e-commerce solution with React and Node.js. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
            owner: { id: '1', name: 'John Doe', avatar: 'JD' },
            createdAt: '2025-08-15T10:00:00Z',
            status: 'Active',
            priority: 'High',
            progress: 75,
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
        },
        {
            id: '2',
            title: 'Mobile App Development',
            description: 'Cross-platform mobile application for project management with real-time collaboration features and offline sync capabilities.',
            owner: { id: '1', name: 'John Doe', avatar: 'JD' },
            createdAt: '2025-08-20T14:30:00Z',
            status: 'In Progress',
            priority: 'Medium',
            progress: 45,
            tags: ['React Native', 'TypeScript', 'Firebase']
        },
        {
            id: '3',
            title: 'Data Analytics Dashboard',
            description: 'Real-time analytics dashboard for business intelligence with interactive charts, custom reporting, and data visualization tools.',
            owner: { id: '2', name: 'Jane Smith', avatar: 'JS' },
            createdAt: '2025-08-25T09:15:00Z',
            status: 'Planning',
            priority: 'Medium',
            progress: 20,
            tags: ['Python', 'D3.js', 'PostgreSQL', 'Docker']
        },
        {
            id: '4',
            title: 'AI Chatbot Integration',
            description: 'Implementing an intelligent chatbot system for customer support with natural language processing and machine learning capabilities.',
            owner: { id: '3', name: 'Mike Johnson', avatar: 'MJ' },
            createdAt: '2025-09-01T11:45:00Z',
            status: 'Active',
            priority: 'High',
            progress: 60,
            tags: ['Python', 'OpenAI', 'Flask', 'Redis']
        },
        {
            id: '5',
            title: 'Blockchain Voting System',
            description: 'Secure voting system built on blockchain technology ensuring transparency, immutability, and voter privacy.',
            owner: { id: '4', name: 'Sarah Wilson', avatar: 'SW' },
            createdAt: '2025-07-10T16:20:00Z',
            status: 'Completed',
            priority: 'High',
            progress: 100,
            tags: ['Solidity', 'Web3', 'React', 'Ethereum']
        },
        {
            id: '6',
            title: 'IoT Home Automation',
            description: 'Smart home automation system with IoT sensors, mobile app control, energy monitoring, and voice assistant integration.',
            owner: { id: '5', name: 'David Brown', avatar: 'DB' },
            createdAt: '2025-08-05T13:10:00Z',
            status: 'On Hold',
            priority: 'Low',
            progress: 30,
            tags: ['Arduino', 'Raspberry Pi', 'MQTT', 'React Native']
        },
        {
            id: '7',
            title: 'Social Media Analytics Tool',
            description: 'Comprehensive social media analytics platform for tracking engagement, sentiment analysis, performance metrics, and competitor analysis.',
            owner: { id: '6', name: 'Lisa Garcia', avatar: 'LG' },
            createdAt: '2025-08-30T08:30:00Z',
            status: 'In Progress',
            priority: 'Medium',
            progress: 35,
            tags: ['Vue.js', 'Node.js', 'MongoDB', 'Twitter API']
        },
        {
            id: '8',
            title: 'Virtual Reality Training Platform',
            description: 'Immersive VR training platform for corporate education with interactive 3D environments, progress tracking, and certification system.',
            owner: { id: '2', name: 'Jane Smith', avatar: 'JS' },
            createdAt: '2025-09-02T12:00:00Z',
            status: 'Planning',
            priority: 'High',
            progress: 15,
            tags: ['Unity', 'C#', 'Oculus SDK', 'WebGL']
        },
        {
            id: '9',
            title: 'Cryptocurrency Exchange',
            description: 'Building a secure cryptocurrency trading platform with real-time market data, wallet integration, and advanced trading features.',
            owner: { id: '7', name: 'Alex Chen', avatar: 'AC' },
            createdAt: '2025-08-12T15:45:00Z',
            status: 'Active',
            priority: 'High',
            progress: 55,
            tags: ['React', 'Node.js', 'WebSocket', 'PostgreSQL']
        },
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
        <div className="feed">
            <Header />
            <div className="feed-header">
                <h2>{feedType === 'local' ? 'Local Feed' : 'Global Feed'}</h2>
                <span className="project-count">
                    {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                </span>
            </div>
            <div className="feed-content">
                {filteredProjects.length === 0 ? (
                    <div className="no-results">
                        <div className="no-projects-message">
                            <h3>No projects found</h3>
                            <p>
                                {searchTerm
                                    ? 'Try adjusting your search terms to find more projects.'
                                    : feedType === 'local'
                                        ? 'Connect with more users to see their projects in your local feed.'
                                        : 'Be the first to share a project with the community!'
                                }
                            </p>
                        </div>
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
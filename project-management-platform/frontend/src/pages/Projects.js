import React, { useState } from 'react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import ProjectPreview from '../components/ProjectPreview';
import CreateProject from '../components/CreateProject';

const Projects = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [filterStatus, setFilterStatus] = useState('all');
    const [filterPriority, setFilterPriority] = useState('all');

    // Mock projects data - you can move this to a separate data file
    const mockProjects = [
        {
            id: '1',
            title: 'E-Commerce Platform',
            description: 'Building a modern e-commerce solution with React and Node.js. This platform includes user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
            owner: { id: '1', name: 'John Doe', avatar: 'JD' },
            createdAt: '2025-08-15T10:00:00Z',
            status: 'Active',
            priority: 'High',
            progress: 75,
            dueDate: '2025-12-15',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            teamSize: 4
        },
        {
            id: '2',
            title: 'Mobile App Development',
            description: 'Cross-platform mobile application for project management with real-time collaboration features.',
            owner: { id: '1', name: 'John Doe', avatar: 'JD' },
            createdAt: '2025-08-20T14:30:00Z',
            status: 'In Progress',
            priority: 'Medium',
            progress: 45,
            dueDate: '2025-11-30',
            tags: ['React Native', 'TypeScript', 'Firebase'],
            teamSize: 3
        },
        {
            id: '3',
            title: 'Data Analytics Dashboard',
            description: 'Real-time analytics dashboard for business intelligence with interactive charts and reporting capabilities.',
            owner: { id: '2', name: 'Jane Smith', avatar: 'JS' },
            createdAt: '2025-08-25T09:15:00Z',
            status: 'Planning',
            priority: 'Medium',
            progress: 20,
            dueDate: '2026-01-15',
            tags: ['Python', 'D3.js', 'PostgreSQL', 'Docker'],
            teamSize: 5
        },
        {
            id: '4',
            title: 'AI Chatbot Integration',
            description: 'Implementing an intelligent chatbot system for customer support with natural language processing.',
            owner: { id: '3', name: 'Mike Johnson', avatar: 'MJ' },
            createdAt: '2025-09-01T11:45:00Z',
            status: 'Active',
            priority: 'High',
            progress: 60,
            dueDate: '2025-10-30',
            tags: ['Python', 'OpenAI', 'Flask', 'Redis'],
            teamSize: 2
        },
        {
            id: '5',
            title: 'Blockchain Voting System',
            description: 'Secure voting system built on blockchain technology ensuring transparency and immutability.',
            owner: { id: '4', name: 'Sarah Wilson', avatar: 'SW' },
            createdAt: '2025-07-10T16:20:00Z',
            status: 'Completed',
            priority: 'High',
            progress: 100,
            dueDate: '2025-08-30',
            tags: ['Solidity', 'Web3', 'React', 'Ethereum'],
            teamSize: 6
        },
        {
            id: '6',
            title: 'IoT Home Automation',
            description: 'Smart home automation system with IoT sensors, mobile app control, and energy monitoring.',
            owner: { id: '5', name: 'David Brown', avatar: 'DB' },
            createdAt: '2025-08-05T13:10:00Z',
            status: 'On Hold',
            priority: 'Low',
            progress: 30,
            dueDate: '2026-03-15',
            tags: ['Arduino', 'Raspberry Pi', 'MQTT', 'React Native'],
            teamSize: 3
        },
        {
            id: '7',
            title: 'Social Media Analytics Tool',
            description: 'Comprehensive social media analytics platform for tracking engagement, sentiment analysis, and performance metrics.',
            owner: { id: '6', name: 'Lisa Garcia', avatar: 'LG' },
            createdAt: '2025-08-30T08:30:00Z',
            status: 'In Progress',
            priority: 'Medium',
            progress: 35,
            dueDate: '2025-12-20',
            tags: ['Vue.js', 'Node.js', 'MongoDB', 'Twitter API'],
            teamSize: 4
        },
        {
            id: '8',
            title: 'Virtual Reality Training Platform',
            description: 'Immersive VR training platform for corporate education with interactive 3D environments.',
            owner: { id: '2', name: 'Jane Smith', avatar: 'JS' },
            createdAt: '2025-09-02T12:00:00Z',
            status: 'Planning',
            priority: 'High',
            progress: 15,
            dueDate: '2026-02-28',
            tags: ['Unity', 'C#', 'Oculus SDK', 'WebGL'],
            teamSize: 7
        }
    ];

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filteredProjects = mockProjects.filter(project => {
        const matchesSearch = searchTerm === '' ||
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.owner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesStatus = filterStatus === 'all' ||
            project.status.toLowerCase() === filterStatus.toLowerCase();

        const matchesPriority = filterPriority === 'all' ||
            project.priority.toLowerCase() === filterPriority.toLowerCase();

        return matchesSearch && matchesStatus && matchesPriority;
    });

    return (
        <div className="projects-container">
            <Header />

            <main className="main-content">
                <div className="projects-header">
                    <div className="projects-title-section">
                        <h1>All Projects</h1>
                        <p>Manage and explore all projects across the platform</p>
                    </div>
                    <button
                        className="create-project-btn"
                        onClick={() => setShowCreateModal(true)}
                    >
                        + Create Project
                    </button>
                </div>

                <div className="projects-controls">
                    <SearchInput
                        onSearch={handleSearch}
                        placeholder="Search projects by title, description, owner, or tags..."
                    />

                    <div className="filters">
                        <div className="filter-group">
                            <label htmlFor="status-filter">Status:</label>
                            <select
                                id="status-filter"
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                            >
                                <option value="all">All Status</option>
                                <option value="planning">Planning</option>
                                <option value="active">Active</option>
                                <option value="in progress">In Progress</option>
                                <option value="on hold">On Hold</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label htmlFor="priority-filter">Priority:</label>
                            <select
                                id="priority-filter"
                                value={filterPriority}
                                onChange={(e) => setFilterPriority(e.target.value)}
                            >
                                <option value="all">All Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>

                        <div className="results-count">
                            {filteredProjects.length} of {mockProjects.length} projects
                        </div>
                    </div>
                </div>

                <div className="projects-grid">
                    {filteredProjects.length === 0 ? (
                        <div className="no-results">
                            <h3>No projects found</h3>
                            <p>Try adjusting your search criteria or create a new project.</p>
                            <button
                                className="create-project-btn"
                                onClick={() => setShowCreateModal(true)}
                            >
                                Create Your First Project
                            </button>
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
            </main>

            {showCreateModal && (
                <CreateProject onClose={() => setShowCreateModal(false)} />
            )}
        </div>
    );
};

export default Projects;
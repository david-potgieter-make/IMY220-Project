const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

// Mock user data
const mockUsers = [
    {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123', // In real app, this would be hashed
        avatar: 'JD',
        bio: 'Experienced project manager with a passion for delivering high-quality results.',
        location: 'San Francisco, CA',
        joinDate: '2024-01-15',
        skills: ['Project Management', 'Agile/Scrum', 'Team Leadership', 'Strategic Planning']
    },
    {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        password: 'password123',
        avatar: 'JS',
        bio: 'Full-stack developer specializing in modern web technologies.',
        location: 'New York, NY',
        joinDate: '2024-03-20',
        skills: ['React', 'Node.js', 'TypeScript', 'Database Design']
    }
];

// Authentication Routes

// Sign-in endpoint
app.post('/api/auth/login', (req, res) => {
    console.log('Login attempt:', req.body);

    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Email and password are required'
        });
    }

    // Find user by email
    const user = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
        return res.status(401).json({
            success: false,
            message: 'Invalid email or password'
        });
    }

    // Check password (in real app, compare hashed passwords)
    if (user.password !== password) {
        return res.status(401).json({
            success: false,
            message: 'Invalid email or password'
        });
    }

    // Return user data (excluding password)
    const { password: _, ...userWithoutPassword } = user;

    res.json({
        success: true,
        message: 'Login successful',
        user: userWithoutPassword,
        token: 'mock-jwt-token-' + user.id // In real app, generate actual JWT
    });
});

// Sign-up endpoint
app.post('/api/auth/signup', (req, res) => {
    console.log('Signup attempt:', req.body);

    const { firstName, lastName, email, password } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (existingUser) {
        return res.status(409).json({
            success: false,
            message: 'User with this email already exists'
        });
    }

    // Create new user
    const newUser = {
        id: (mockUsers.length + 1).toString(),
        firstName,
        lastName,
        email: email.toLowerCase(),
        password, // In real app, hash the password
        avatar: (firstName.charAt(0) + lastName.charAt(0)).toUpperCase(),
        bio: '',
        location: '',
        joinDate: new Date().toISOString().split('T')[0],
        skills: []
    };

    // Add to mock database
    mockUsers.push(newUser);

    // Return user data (excluding password)
    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json({
        success: true,
        message: 'Account created successfully',
        user: userWithoutPassword,
        token: 'mock-jwt-token-' + newUser.id // In real app, generate actual JWT
    });
});

// User Routes

// Get user profile
app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;

    const user = mockUsers.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User not found'
        });
    }

    const { password: _, ...userWithoutPassword } = user;

    res.json({
        success: true,
        user: userWithoutPassword
    });
});

// Update user profile
app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    const userIndex = mockUsers.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'User not found'
        });
    }

    // Update user data
    mockUsers[userIndex] = { ...mockUsers[userIndex], ...updates };

    const { password: _, ...userWithoutPassword } = mockUsers[userIndex];

    res.json({
        success: true,
        message: 'Profile updated successfully',
        user: userWithoutPassword
    });
});

// Project Routes (Mock data)

// Get all projects
app.get('/api/projects', (req, res) => {
    const mockProjects = [
        {
            id: '1',
            title: 'E-Commerce Platform',
            description: 'Building a modern e-commerce solution with React and Node.js',
            owner: { id: '1', name: 'John Doe', avatar: 'JD' },
            createdAt: '2025-08-15',
            dueDate: '2025-12-15',
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
            dueDate: '2025-11-30',
            status: 'In Progress',
            priority: 'Medium',
            progress: 45,
            tags: ['React Native', 'TypeScript']
        }
    ];

    res.json({
        success: true,
        projects: mockProjects
    });
});

// Get project by ID
app.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;

    // Mock project data
    const project = {
        id,
        title: 'E-Commerce Platform',
        description: 'Building a modern e-commerce solution with React and Node.js',
        owner: { id: '1', name: 'John Doe', avatar: 'JD' },
        createdAt: '2025-08-15',
        dueDate: '2025-12-15',
        status: 'Active',
        priority: 'High',
        progress: 75,
        tags: ['React', 'Node.js', 'MongoDB'],
        teamMembers: [
            { id: '1', name: 'John Doe', avatar: 'JD', role: 'Project Lead' },
            { id: '2', name: 'Jane Smith', avatar: 'JS', role: 'Frontend Developer' }
        ]
    };

    res.json({
        success: true,
        project
    });
});

// Create new project
app.post('/api/projects', (req, res) => {
    console.log('Creating project:', req.body);

    const { title, description, priority, status, tags, dueDate } = req.body;

    if (!title || !description) {
        return res.status(400).json({
            success: false,
            message: 'Title and description are required'
        });
    }

    const newProject = {
        id: Date.now().toString(),
        title,
        description,
        priority: priority || 'Medium',
        status: status || 'Planning',
        tags: tags || [],
        dueDate,
        owner: { id: '1', name: 'John Doe', avatar: 'JD' }, // Mock current user
        createdAt: new Date().toISOString().split('T')[0],
        progress: 0
    };

    res.status(201).json({
        success: true,
        message: 'Project created successfully',
        project: newProject
    });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// Catch all handler for SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Health check available at: http://localhost:${PORT}/api/health`);
    console.log(`Frontend available at: http://localhost:${PORT}`);
});
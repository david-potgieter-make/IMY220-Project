import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear authentication data
        localStorage.removeItem('user');
        navigate('/');
    };

    // Mock current user data
    const currentUser = {
        id: '1',
        name: 'John Doe',
        avatar: 'JD'
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="nav-left">
                    <Link to="/home" className="logo">ProjectHub</Link>
                    <div className="nav-links">
                        <Link to="/home" className="nav-link">Dashboard</Link>
                        <Link to="/profile/current" className="nav-link">Profile</Link>
                    </div>
                </div>

                <div className="nav-right">
                    <div className="user-menu">
                        <div className="user-info">
                            <div className="user-avatar">{currentUser.avatar}</div>
                            <span className="user-name">{currentUser.name}</span>
                        </div>
                        <button className="logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const currentUser = {
        id: '1',
        name: 'John Doe',
        avatar: 'JD'
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="nav-left">
                    <Link to="/home" className="logo">SyncPatch</Link>
                    <div className="nav-links">
                        <Link to="/projects" className="nav-link">Projects</Link>
                        <Link to="/feed/global" className="nav-link">Global Feed</Link>
                        <Link to="/feed/local" className="nav-link">Local Feed</Link>
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
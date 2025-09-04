import React, { useState } from 'react';
import Header from '../components/Header';
import Feed from '../components/Feed';
import SearchInput from '../components/SearchInput';
import ProjectsList from '../components/ProjectsList';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('local');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div className="home-container">
            <Header />

            <main className="main-content">
                <div className="content-header">
                    <h1>Dashboard</h1>
                    <SearchInput onSearch={handleSearch} placeholder="Search projects, users, or content..." />
                </div>

                <div className="feed-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'local' ? 'active' : ''}`}
                        onClick={() => setActiveTab('local')}
                    >
                        Local Feed
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'global' ? 'active' : ''}`}
                        onClick={() => setActiveTab('global')}
                    >
                        Global Feed
                    </button>
                </div>

                <div className="feed-container">
                    <div className="left-column">
                        <Feed feedType={activeTab} searchTerm={searchTerm} />
                    </div>

                    <div className="right-column">
                        <div className="sidebar-section">
                            <h3>Your Projects</h3>
                            <ProjectsList userId="current" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
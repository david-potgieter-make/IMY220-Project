import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Projects from './pages/Projects';
import FeedPage from './pages/Feed';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/feed/global" element={<FeedPage feedType="global" />} />
                <Route path="/feed/local" element={<FeedPage feedType="local" />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
}

export default App;
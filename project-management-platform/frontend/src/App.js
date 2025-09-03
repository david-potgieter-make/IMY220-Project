import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
}

export default App;
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <Link to="/" className="logo">ProjectHub</Link>
                    <h1>Welcome Back</h1>
                    <p>Sign in to your account to continue</p>
                </div>

                <LoginForm />

                <div className="auth-footer">
                    <p>Don't have an account? <Link to="/signup">Create one here</Link></p>
                    <p><Link to="/">← Back to home</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
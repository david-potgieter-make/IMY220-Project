import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <div className="splash-page">
            <div className="register-form">
                <h3>Login</h3>
                <LoginForm />
                <div className="login-link">
                    Don't have an account? <Link to="/">Sign Up</Link>
                </div>
            </div>

            <div className="mission-card">
                <div className="mission-header">
                    <img src="/assets/images/logo.png" alt="syncPatch Logo" className="logo-icon" />
                    <span>syncPatch</span>
                </div>
                <h3>Our Mission</h3>
                <p>
                    Keep people in sync on coding related work whilst highlighting the environmental responsibility we all have.
                </p>
            </div>
        </div>
    );
};

export default Login;
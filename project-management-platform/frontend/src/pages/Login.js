import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import logoImage from '../../public/assets/images/logo.png';

const Login = () => {
    return (
        <div className="splash-page">
            <div className="page-title">Login Page</div>

            {/* Login Form - Left Side */}
            <div className="register-form">
                <h3>Login</h3>
                <div className="form-content">
                    <LoginForm />
                    <div className="login-link">
                        Don't have an account? <Link to="/">Sign Up</Link>
                    </div>
                </div>
            </div>

            {/* Logo - Top Right */}
            <div className="logo-container">
                <div className="logo-icon">
                    <img src={logoImage} alt="Logo" />
                </div>

            </div>

            {/* Mission Card - Bottom Right */}
            <div className="mission-card">
                <div className="mission-header">Our Mission</div>
                <div className="mission-content">
                    <p>
                        Keep people in sync on coding related work whilst highlighting
                        the environmental responsibility we all have.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
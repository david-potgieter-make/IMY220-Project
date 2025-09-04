import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

const Splash = () => {
    return (
        <div className="splash-page">
            <div className="register-form">
                <h3>Register</h3>
                <SignUpForm />
                <div className="login-link">
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </div>

            <div className="mission-card">
                <div className="mission-header">
                    <img src="/assets/" alt="syncPatch Logo" className="logo-icon" />
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

export default Splash;
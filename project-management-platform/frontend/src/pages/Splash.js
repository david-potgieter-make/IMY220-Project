import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

const Splash = () => {
    return (
        <div className="splash-container">
            <div className="splash-hero">
                <div className="hero-content">
                    <div className="logo-section">
                        <div className="logo">ProjectHub</div>
                        <h1>Manage Projects with Ease</h1>
                        <p>Collaborate, organize, and track your projects in one unified platform.
                            Join thousands of teams who trust ProjectHub for their project management needs.</p>
                    </div>

                    <div className="mission-card">
                        <div className="mission-logo">🚀</div>
                        <h3>Our Mission</h3>
                        <p>Empowering teams to deliver outstanding projects by providing intuitive tools
                            that enhance collaboration and streamline workflows.</p>
                    </div>
                </div>
            </div>

            <div className="forms-section">
                <div className="forms-container">
                    <div className="form-card">
                        <h2>Sign In</h2>
                        <LoginForm />
                        <p className="form-footer">
                            Don't have an account? <Link to="/signup">Sign up here</Link>
                        </p>
                    </div>

                    <div className="form-card">
                        <h2>Create Account</h2>
                        <SignUpForm />
                        <p className="form-footer">
                            Already have an account? <Link to="/login">Sign in here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Splash;
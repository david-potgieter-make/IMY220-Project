import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
// Import the logo image
import logoImage from '../../public/assets/images/logo.png';

const Splash = () => {
    return (
        <div className="splash-page">

            <div className="register-form">
                <h3>Register</h3>
                <div className="form-content">
                    <SignUpForm />
                    <div className="login-link">
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>

            <div className="logo-container">
                <div className="logo-icon">
                    <img src={logoImage} alt="Logo" />
                </div>

            </div>

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

export default Splash;

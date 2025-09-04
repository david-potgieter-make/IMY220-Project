import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <Link to="/" className="logo">ProjectHub</Link>
                    <h1>Create Account</h1>
                    <p>Join our community and start managing projects today</p>
                </div>

                <SignUpForm />

                <div className="auth-footer">
                    <p>Already have an account? <Link to="/login">Sign in here</Link></p>
                    <p><Link to="/">← Back to home</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
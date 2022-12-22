import React from 'react';
import AppButton from '../AppButton'
import './Welcome.css'
export default function Welcome({welcomeButton}) {
    return (
        <div className="Welcome app-container">
            <div className="welcome-message">
                <p className="welcome-title">Welcome</p>
                <div className="welcome-line"></div>
                <p className="welcome-subtitle">Create a new task</p>
                <AppButton
                    text="START"
                    classes="welcome-button"
                    action={welcomeButton}
                />
            </div>
            <div className="welcome-ribbon"></div>
        </div>
    );
}

import React from 'react';

export const LoadingPage: React.FC = ()  => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
            <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading...</p>
        </div>
    );
};
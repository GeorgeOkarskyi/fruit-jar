import React from 'react';

export const LoadingPage: React.FC = ()  =>  (
  <div 
    className="d-flex flex-column align-items-center justify-content-center vh-100"
    aria-busy="true"
  >
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <p className="mt-3">Loading...</p>
  </div>
);
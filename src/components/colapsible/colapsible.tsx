import React, { useState } from 'react';

interface CollapsibleProps {
    title: React.ReactNode;
    children: React.ReactNode;
    isDisabled: boolean;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children, isDisabled }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => setIsOpen((prev) => !prev);

    return <>
        {isDisabled ? 
        <>{children}</>:
        <div className="card mb-3">
            <div 
                className="card-header d-flex justify-content-between align-items-center" 
                onClick={toggleCollapse} 
                style={{ cursor: 'pointer'}}
            >
                {title}
                <button className="btn  btn-sm text-decoration-none">
                    {isOpen ? '−' : '+'}
                </button>
            </div>
            <div className={`collapse ${isOpen ? 'show' : ''}`}>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>}
     </>
};

export default React.memo(Collapsible);

import React, { useRef, useState } from 'react';
import './colapsible.scss'

interface CollapsibleProps {
    title: React.ReactNode;
    children: React.ReactNode;
    isDisabled: boolean;
    className?: string;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children, isDisabled, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const toggleCollapse = () => setIsOpen((prev) => !prev);

    return <>
        {isDisabled ? 
            <>{children}</>:
            <>
                <div 
                    className={`d-flex justify-content-between align-items-center my-1 py-1 px-3 ${ isOpen ? 'rounded-top-4 mb-0': 'rounded-4'}  border`} 
                    onClick={toggleCollapse} 
                    style={{ cursor: 'pointer'}}
                >
                    <h6 className='m-0'>{title}</h6>
                    <span>{isOpen ? '−' : '+'}</span>
                </div>
                <div 
                    style={{
                        height: isOpen && contentRef.current ? `${contentRef.current.scrollHeight+1}px` : '0px',
                    }}
                    ref={contentRef}
                    className={`collapsible__content ${className} ${isOpen ? 'show border' : ''}`}
                >
                    {children}
                </div>
            </>
        }
    </>
};

export default React.memo(Collapsible);

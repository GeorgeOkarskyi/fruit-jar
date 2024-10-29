import './colapsible.scss';
import React, { useRef, useState } from 'react';
interface CollapsibleProps {
    title: React.ReactNode;
    children: React.ReactNode;
    isDisabled: boolean;
    className?: string;
    headerElement?: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children, isDisabled, className, headerElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleCollapse = () => setIsOpen((prev) => !prev);

  if(isDisabled) {
    return <>{children}</>;
  }

  return <>
    <div 
      className={`d-flex justify-content-between align-items-center my-1 py-1 px-3 ${ isOpen ? 'rounded-top-4 mb-0': 'rounded-4'}  border`} 
      onClick={toggleCollapse} 
      role="button"
      aria-expanded={isOpen}
      tabIndex={0}
      style={{ cursor: 'pointer'}}
    >
      <span>{isOpen ? '−' : '+'}</span>
      <h6 className='m-0'>{title}</h6>
      {headerElement}
    </div>
    <div 
      ref={contentRef}
      className={`collapsible__content ${className} ${isOpen ? 'show border' : ''}`}
      aria-hidden={!isOpen}
      style={{
        height: isOpen && contentRef.current ? `${contentRef.current.scrollHeight+1}px` : '0px',
      }}
    >
      {children}
    </div>
  </>;
};

export default React.memo(Collapsible);

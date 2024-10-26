import { useEffect } from 'react';
import { Option } from '../../types/option'
import React from 'react';

interface SelectProps {
    label: string;
    value?: string;
    onChange: (value: string) => void;
    options: Option[];
    className?: string;
}

const Select: React.FC<SelectProps> = ({ label, value, onChange, options, className }) => {
    useEffect(() => {
        onChange(value || options[0].value);
    }, [onChange, options, value])

    return (
        <div className={`${className} 'mb-3`}>
            <label className="form-label">{label}</label>
            <select
                className="form-select"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default React.memo(Select);

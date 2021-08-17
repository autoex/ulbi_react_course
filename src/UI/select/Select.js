import React from 'react';
import classes from './Select.module.css'

const Select = ({defaultValue, options, onChange, value}) => {
    return (
        <select value={value} onChange={(e)=>onChange(e.target.value)} className={classes.select}>
            <option disabled>{defaultValue}</option>
            {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
        </select>
    );
};

export default Select;
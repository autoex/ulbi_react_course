import React from 'react';

const Select = ({defaultValue, options, sortPosts, value}) => {
    return (
        <select value={value} onChange={(e)=>sortPosts(e.target.value)}>
            <option disabled>{defaultValue}</option>
            {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
        </select>
    );
};

export default Select;
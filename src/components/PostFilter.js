import React from 'react';
import Input from "../UI/input/Input";
import Select from "../UI/select/Select";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className='postFilter'>
            <div>
                <Input
                    placeholder='Search..'
                    value={filter.query}
                    onChange={(e) => setFilter({...filter, query: e.target.value})}
                />
            </div>
            <div>
                <Select
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue='Select'
                    options={[{value: 'title', name: 'By title'}, {value: 'description', name: 'By description'}]}
                />
            </div>
        </div>
    );
};

export default PostFilter;
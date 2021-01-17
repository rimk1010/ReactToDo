import React from 'react';

const filters =[
    {type:'all', label:'All'},
    {type:'active', label:'In progress'},
    {type:'completed', label:'Finished'}
];

function TodoFilter({selectedFilter, handleFilter}) {
    return filters.map(filter => (
        <label key={filter.type}>
            <input type='radio' value={filter.type} checked={filter.type === selectedFilter} onChange={handleFilter} />
            {filter.label}
        </label>
    ));
}

export default TodoFilter;
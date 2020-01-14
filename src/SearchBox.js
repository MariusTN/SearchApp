import React from 'react'

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2 ma2 ba b--green bg-lightest-blue'>
            <input type='search' 
            placeholder='search robots'
            onChange={searchChange} />
            </div>
    )
}

export default SearchBox;
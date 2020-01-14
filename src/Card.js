import React from 'react';

const Card = ({name, email}) => {
    
    return(
        <div className='bg-light-blue dib br3 pa5 ma2 grow bw2 shadow-4'>
            <img alt='robots' src={`https://robohash.org/${name}?200x200`} ></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
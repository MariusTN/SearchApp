import React from 'react';

const Card = ({name, email}) => {
    
    return(
        <div className='roboCard'>
            <img alt='robots' src={`https://robohash.org/${name}?200x200`} ></img>
            <div>
                <h2 className="roboName">{name}</h2>
                <p className="roboEmail">{email}</p>
            </div>
        </div>
    );
}

export default Card;
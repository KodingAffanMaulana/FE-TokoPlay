import React from 'react'
import './Card.css'

const Card = ({ title, imageUrl }) => {
    const containerStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%'
    };

    return (
        <div className='main flex flex-col' style={containerStyle}>
            <div className='col1'>
                <div className="live">
                    LIVE
                </div>
            </div>
            <div className='col2 p-2'>
                <h2 className='text-xl font-semibold'>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default Card;
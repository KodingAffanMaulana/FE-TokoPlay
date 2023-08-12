import React from 'react'

const CardProduct = ({ link, title, price, discount }) => {
    const containerStyle = {
        backgroundImage: `url(${'https://i.ibb.co/cvpntL1/hats.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%'
    };

    const col2Style = {
        borderRadius: '10px',
        position: 'relative', // Diperlukan untuk stacking context
    };

    const blurLayerStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%)', // Menambahkan latar belakang gelap
        borderRadius: '10px',
        zIndex: -1, // Mendorong ke lapisan belakang
        top: 0,
        left: 0,
    };

    return (
        <div className='flex flex-col rounded-lg text-white' style={containerStyle}>
            <div className='flex items-start p-2 pb-16 sm:pb-[0] sm:h-[200px]'>
                <div className="flex items-start bg-red-600 px-[8px] rounded-[5px] py-[1px] mr-1">
                    <p className='text-[12px]'>70%</p>
                </div>
            </div>
            <div className='text-white items-end p-2 text-center rounded-lg z-10' style={col2Style}>
                <div style={blurLayerStyle}></div>
                <div className='flex flex-col' >
                    <h2 className='sm:text-xl font-semibold'>{title}</h2>
                    <p className='sm:text-xl'>Rp. {price}</p>
                </div>
            </div>
        </div>
    )
}

export default CardProduct;
import React from 'react'
import UrlImage from '../../assets/img/logo.png'
import { TfiSearch } from 'react-icons/tfi'
import './Header.css'

export const Header = () => {
    const buttonList = ["Live", "Explore", "Promo ULTAH!", "Official Store", "Tips & Rekomendasi"
        , "Terbaru","Upcoming"
    ]

return (
    <div>
        <div className='flex items-center justify-between p-4'>
            <div className='logo flex items-center'>
                <img src={UrlImage} alt="logo" />
                <span className='text-white text-xl'>Play</span>
            </div>
            <div>
                <button className='text-white flex items-center gap-4 px-4 py-1'>
                    <span className='text-lg'>search</span>
                    <TfiSearch color='white' fontSize='20px' />
                </button>
            </div>
        </div>
        <div className='text-white flex items-center gap-4 p-4'>
            {buttonList.map((button) => (
                <button className='px-4 py-1'>{button}</button>
            ))}
        </div>
    </div>
)
}

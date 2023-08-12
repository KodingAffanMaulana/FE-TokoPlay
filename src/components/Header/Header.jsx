import React from 'react'
import UrlImage from '../../assets/img/logo.png'
import { TfiSearch } from 'react-icons/tfi'
import './Header.css'

const Header = () => {
    const buttonList = ["Live", "Explore", "Promo ULTAH!", "Official Store", "Tips & Rekomendasi"
        , "Terbaru", "Upcoming"
    ]

    return (
        <div>
            <div className='flex items-center justify-between p-4'>
                <div className='logo flex items-center'>
                    <img src={UrlImage} alt="logo" className='w-[150px] sm:w-[250px] ' />
                    <span className='text-white text-sm sm:text-xl'>Play</span>
                </div>
                <div>
                    <button className='text-white flex items-center gap-4 px-4 py-1'>
                        <span className='text-sm sm:text-xl'>Search</span>
                        <TfiSearch color='white' className='text-sm sm:text-[20px]' />
                    </button>
                </div>
            </div>
            <div className='text-white flex items-center p-4 overflow-x-auto sm:justify-center'>
                {buttonList.map((button, index) => (
                    <button
                        key={index} // Pastikan setiap elemen memiliki key unik saat menggunakan .map()
                        className='px-4 py-1 whitespace-nowrap' // whitespace-nowrap menghindari pemotongan teks pada tombol yang panjang
                    >
                        {button}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Header;
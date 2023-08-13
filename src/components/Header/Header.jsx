import React, { useContext, useEffect } from 'react';
import UrlImage from '../../assets/img/logo.png';
import './Header.css';
import SearchBox from '../SearchBox/SearchBox';
import { Context } from '../../context/MyContext';

const Header = () => {
    const { searchField, setSearchField, products, setProducts, setFilterProducts } = useContext(Context);
    const url = 'https://affanmaulanamidproject-production.up.railway.app/thumbnails';

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((thumbnails) => {
                setProducts(thumbnails);
                console.log(thumbnails);
            });
    }, [setProducts]);

    useEffect(() => {
        const newFilteredMonsters = products.filter((product) => {
            return product.title.toLocaleLowerCase().includes(searchField);
        });

        setFilterProducts(newFilteredMonsters);
    }, [products, searchField, setFilterProducts]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

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
                <div className='flex items-center'>
                    <SearchBox
                        onChangeHandler={onSearchChange}
                        placeholder='search live'
                    />
                </div>
            </div>
            <div className='text-white flex items-center p-4 overflow-x-auto sm:justify-center gap-2'>
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
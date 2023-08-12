import CardThumbnail from '../../components/CardThumbnail/CardThumbnail';
import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import  Header  from '../../components/Header/Header';

const Home = () => {
    const categories = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            "id": 4,
            "title": "womens",
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
            "id": 5,
            "title": "mens",
            "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }, {
            "id": 6,
            "title": "hats",
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            "id": 7,
            "title": "jackets",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            "id": 8,
            "title": "sneakers",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            "id": 9,
            "title": "womens",
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
            "id": 10,
            "title": "mens",
            "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
    ];

    return (
        <>
            <Header />
            <div className='container grid grid-cols-1 gap-2 p-4 sm:grid-cols-5 sm:gap-4 sm:p-8'>
                {categories.map(({ id, title, imageUrl }) => (
                    <Link key={id} to={`/detail/${id}`}>
                        <CardThumbnail className='category-container' id={id} title={title} imageUrl={imageUrl} />
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Home;
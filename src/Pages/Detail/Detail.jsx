import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { TfiClose } from 'react-icons/tfi';
import CardProduct from '../../components/CardProduct/CardProduct';

const Headers = () => {
    return (
        <div>
            <div className='flex items-center justify-between p-2' >
                <Link to='/' className='flex items-center gap-3 pl-4 hover:text-slate-700 '>
                    <TfiClose color='white' className='text-sm sm:text-[20px] ' />
                    <span className='text-white text-sm sm:text-xl font-bold hover:text-slate-400'>Play</span>
                </Link>
                <div className='text-white flex items-center justify-center gap-4 p-4'>
                    <p>Nama Toko</p>
                </div>
            </div>
        </div>
    )
}

const Detail = () => {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const loadDetail = async () => {
            setLoading(true);
            try {
                const url = "https://swapi.py4e.com/api/films/" + id;
                const response = await fetch(url);
                const data = await response.json();
                setDetail(data)
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        loadDetail()
    }, [id]);

    return (
        <>
            <div className='bg-gradient-to-tr from-[gray-900] to-[#00ffcc] p-2 sm:p-4'>
                <div className="drop-shadow-2xl rounded-2xl">
                    <Headers />

                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-0'>
                        <div className='flex flex-row sm:flex-col overflow-x-auto sm:wrap sm:object-none sm:w-[20%] bg-slate-700 rounded-lg p-4 gap-4 '>
                            <h1 className='text-white font-bold flex items-center sm:justify-center sm:text-center'>Products</h1>
                            <CardProduct title={'Bawang'} price={'10.000'} />
                            <CardProduct title={'Bawang'} price={'10.000'} />
                            <CardProduct title={'Bawang'} price={'10.000'} />
                            <CardProduct title={'Bawang'} price={'10.000'} />
                        </div>

                        <div className='sm:w-[60%]'>
                            <div className="sm:px-4">
                                <VideoCard title="Judul Video" videoUrl={videoUrl} />
                            </div>
                        </div>

                        <div className='sm:w-[20%] sm:h-[85vh] flex flex-col bg-slate-700 rounded-lg p-4'>
                            <div className='h-[100%]'>
                                <h1 className='text-white font-bold text-center'>List Comments</h1>
                                <div className='flex flex-col gap-2 mt-4 text-white'>
                                    <p>
                                        Komen
                                        dskfsdlf
                                        asdfkjasdf
                                        sdfksdf
                                        adsfjskdf
                                        sdfkjsdkf
                                        sdfkjsdkf
                                    </p>
                                </div>
                            </div>
                            <div className='h-[10%] flex justify-center items-center text-white p-4 gap-2'>
                                <input type="text" className='rounded-lg px-2 py-1 text-black' placeholder='write your comments' />
                                <button className='rounded-lg px-2 py-1 hover:bg-red-800'>Submit</button>
                            </div>
                        </div>
                    </div>

                    {/* {!loading ? (
                    <VStack spacing={8}>
                ) : (
                    <Text size="md">Loading...</Text>
                )} */}
                </div>
            </div>
        </>
    );
}

const videoUrl = 'https://www.youtube.com/embed/32NG53X0v54';

const VideoCard = ({ title, videoUrl }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg text-white">
            <div className="relative">
                <iframe
                    title={title}
                    width="100%"
                    height="570.15px"
                    src={videoUrl}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="p-4 bg-slate-700 text-center">
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>
        </div>
    );
};

export default Detail;
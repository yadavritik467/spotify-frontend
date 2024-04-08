import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import BottomCTA from '../components/BottomCTA';
import { useEffect } from 'react';

export default function HomePage() {


    const navigate = useNavigate()
    useEffect(() => {
        const accessToken: string = JSON.parse(
            localStorage.getItem("token") as string
        )
        if (!accessToken) {
            navigate('/login')
        }
    }, [navigate])

    return (
        <>
            <div className='w-full bg-black text-gray-50 min-h-screen '>
                <div className="relative  flex flex-wrap">
                    <Sidebar active="home" />
                    <div className='p-2 min-h-screen w-full lg:w-[80%] lg:ml-[20%]'>
                        <Navbar page="home" />
                        <Outlet />
                        {/* <div className='bg-[#121212] rounded-md p-2 mt-2 sm:mb-16'>
                            <div className='mb-7'>
                                <div className='flex flex-wrap items-center justify-between'>
                                    <SectionTitle text="Smoothie Playlist" />
                                    <Link to="/" className='text-sm hover:underline'>Show All <i className='bi bi-chevron-right'></i></Link>
                                </div>
                                <div className='flex flex-wrap gap-4 mt-2'>
                                    {
                                       allSongs.length? allSongs.map((song: Song) => {
                                            return (
                                                <div onClick={() => clickOnSingleSong(song)} key={song?._id} className='w-[200px] p-4 h-fit border'>
                                                    <div className='w-full flex justify-center items-center'>
                                                        <img className='object-cover w-[150px] h-[150px]' src="https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE" alt="" />
                                                    </div>
                                                    <div className='mt-2'>
                                                        <h6 className='text-sm font-medium line-clamp-1 opacity-50'>{transFormCharacter(song?.songName)}</h6>
                                                        <h6 className='text-sm font-medium line-clamp-1 opacity-50'> Listen : {song?.listeningCount?.length}</h6>
                                                    </div>
                                                </div>
                                            )
                                        }) : <p className='text-center opacity-50 w-full'>No Song lists</p>
                                    }
                                    <audio autoPlay controls src={songUrl} className='w-full'></audio>
                                </div>
                            </div>
                            <Footer />
                        </div> */}
                    </div>
                </div>
                <BottomCTA />
            </div>
        </>
    )
}

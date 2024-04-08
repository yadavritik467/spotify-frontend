import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadSingleUserApi } from '../redux/actions/authAction';

export default function SingleUser() {

    const { id } = useParams<{ id: string }>()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadSingleUserApi(id))
    }, [dispatch])




    return (
        <>
            <div className='w-full bg-black text-gray-50 min-h-[calc(100vh-50px)] xm:min-h-screen '>

                hiii there

            </div >
        </>
    )
}

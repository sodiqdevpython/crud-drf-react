import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/navbar';
import axios from 'axios';

function Detail() {

    const [data, setData] = useState([]);

    const { id } = useParams()

    const navigate = useNavigate()

    async function deleteProduct() {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/${id}/`)
            console.log(response)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        async function getDetail() {
            const response = await axios.get(`http://127.0.0.1:8000/${id}/`)
            setData(response.data)
        }
        getDetail()
    }, [id])

    return (
        <div>
            <Navbar />

            <div className='flex flex-col items-center mt-5 py-5'>
                <img className='w-1/2 rounded-xl shadow-2xl' src={data.image} alt={data.name} />
                <h2 className='text-4xl font-mono'>{data.name}</h2>
                <p>{data.description}</p>
                <p>{data.price}</p>
                <p>{data.category}</p>
            </div>
            <button onClick={deleteProduct} className='bg-slate-700 px-5 py-3 rounded-lg text-white'>Delete</button>
            <button onClick={() => navigate(`/update/${id}/`)} className='mx-5 hover:bg-Warning transition-all duration-300  border-2 text-black border-Warning px-5 py-3 rounded-lg text-white'>Update</button>
        </div>
    )
}

export default Detail
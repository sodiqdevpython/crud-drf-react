import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/navbar'
import Card from '../components/card'

function Home() {

    const [productsData, setProductsData] = useState([])

    async function getData() {
        const response = await axios.get('http://127.0.0.1:8000/')
        setProductsData(response.data);
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <Navbar />
            <div className='mt-5'>
                <p className='text-center text-4xl'>Show all the products</p>
            </div>
            <div>
                <Card cardData={productsData} />
            </div>
        </div>
    )
}


export default Home
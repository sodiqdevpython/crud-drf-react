import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Update() {

    const navigate = useNavigate()

    const { id } = useParams()

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [moreInfo, setMoreInfo] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState(null)
    const [imagePreview, setImagePreview] = useState('')

    async function updateProduct() {
        let form = new FormData()

        form.append('name', name)
        form.append('price', price)
        form.append('description', moreInfo)
        form.append('category', category)

        if (image) {
            form.append('image', image)
        }
        console.log(image);

        try {
            const response = await axios.put(`http://127.0.0.1:8000/${id}/`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(response.status);
            navigate(`/detail/${id}/`)

        } catch (e) {
            console.log(e.response.data);
        }
    }

    function handleImage(e) {
        let file = e.target.files[0]
        setImage(file)
        setImagePreview(URL.createObjectURL(file))
    }

    useEffect(() => {
        async function getData() {
            const response = await axios.get(`http://127.0.0.1:8000/${id}/`)

            setName(response.data.name)
            setPrice(response.data.price)
            setMoreInfo(response.data.description)
            setCategory(response.data.category)
            setImagePreview(response.data.image)
        }

        getData()
    }, [id])

    return (
        <div>
            <Navbar />
            <div className='mt-5'>
                <form>
                    <div className='flex flex-col items-center w-[80%] mt-5'>
                        <img style={{
                            width: 200,
                            height: 150
                        }} src={imagePreview} alt="Brauzeringizda muammo bor" />
                        <p>Image</p>
                        <input
                            type='file'
                            accept='IMAGE/*'
                            className='w-full bg-slate-800 border-2 border-slate-300 text-white shadow-2xl rounded-2xl px-1 font-mono text-xl'
                            required
                            onChange={handleImage}
                        />

                        <p>Name</p>
                        <input
                            value={name}
                            type='text'
                            className='w-full bg-slate-800 border-2 border-slate-300 text-white shadow-2xl rounded-2xl px-1 font-mono text-xl'
                            required
                            onChange={(e) => setName(e.target.value)}
                        />

                        <p>Price</p>
                        <input
                            value={price}
                            type='number'
                            className='w-full bg-slate-800 border-2 border-slate-300 text-white shadow-2xl rounded-2xl px-1 font-mono text-xl'
                            required
                            onChange={(e) => setPrice(e.target.value)}
                        />

                        <p>More info</p>
                        <textarea
                            value={moreInfo}
                            className='w-full bg-slate-800 border-2 border-slate-300 text-white shadow-2xl rounded-2xl px-1 font-mono text-xl'
                            rows="3"
                            cols="50"
                            required
                            onChange={(e) => setMoreInfo(e.target.value)}
                        >

                        </textarea>

                        <p>Category</p>
                        <input
                            value={category}
                            required
                            type='text'
                            className='w-full bg-slate-800 border-2 border-slate-300 text-white shadow-2xl rounded-2xl px-1 font-mono text-xl'
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <button onClick={updateProduct} className='bg-slate-700 px-5 py-2 rounded-lg shadow-2xl mt-5 text-white font-mono mx-5' type='button'>Post it</button>
                </form>
            </div>
        </div>
    )
}

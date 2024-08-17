import React, { useState } from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {

    const [image, setImage] = useState(null)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [about, setAbout] = useState('')
    const [category, setCategory] = useState('')

    const navigate = useNavigate()

    async function postData(event) {
        event.preventDefault()

        let form = new FormData()

        form.append('name', name)
        form.append('price', price)
        form.append('description', about)
        form.append('category', category)

        if (image !== null) {
            form.append('image', image)
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            const id = await response.data.id

            console.log(response.status);
            console.log(response.data);
            navigate(`/detail/${id}`)
        } catch (e) {
            console.log(e);
        }

    }

    return (
        <div>
            <Navbar />
            <form>
                <div className='flex flex-col items-center w-[80%] mt-5'>
                    <p>Image</p>
                    <input
                        type='file'
                        accept='IMAGE/*'
                        className='w-full bg-slate-800 border-2 border-slate-300 text-white shadow-2xl rounded-2xl px-1 font-mono text-xl'
                        required
                        onChange={(e) => setImage(e.target.files[0])}
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
                        className='w-full bg-slate-800 border-2 border-slate-300 text-white shadow-2xl rounded-2xl px-1 font-mono text-xl'
                        rows="3"
                        cols="50"
                        required
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
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
                <button onClick={postData} className='bg-slate-700 px-5 py-2 rounded-lg shadow-2xl mt-5 text-white font-mono mx-5' type='button'>Post it</button>
            </form>
        </div>
    )
}

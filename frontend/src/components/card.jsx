import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ cardData }) {

    return (
        <div className='w-full flex flex-row flex-wrap mt-10'>
            {cardData.map((item, index) => (
                <div className='md:w-1/3 w-full mx-8 shadow-2xl bg-slate-300 rounded-xl' key={index}>
                    <img className='hover:cursor-all-scroll h-[250px] rounded-lg w-full hover:scale-110 shadow-2xl delay-100 transition-all duration-1000' src={item.image} alt={item.name} />
                    <Link to={`/detail/${item.id}`}>
                        <div className='py-5 px-2'>
                            <p className='text-2xl'>{item.name}</p>
                            <p>{item.price}$</p>
                            <p className='font-mono'>{item.description.length > 40 ? item.description.slice(0, 40) + '...' : item.description}</p>
                            <p>{item.category}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

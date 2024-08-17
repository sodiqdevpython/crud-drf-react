import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex flex-row py-5 bg-slate-400'>
            <Link to='/'>
                <p className='px-5 text-2xl font-mono'>Products</p>
            </Link>
            <Link to='/add-product'>
                <p className='px-5 text-2xl font-mono'>Add product</p>
            </Link>
        </div>
    )
}

export default Navbar
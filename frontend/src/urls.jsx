import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddProduct from './pages/AddProduct'
import Detail from './pages/Detail'
import Update from './pages/Update'

export default function Urls() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add-product' element={<AddProduct />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/update/:id' element={<Update />} />
            </Routes>
        </BrowserRouter>
    )
}

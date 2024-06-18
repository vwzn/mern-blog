import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';

const MainApp = () => {
    return (
        <div>
            <p>Header</p>
            <Router>
                <Routes>
                    <Route path="/create-blog" element={<CreateBlog />} />
                    <Route path="/detail-blog" element={<DetailBlog />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
            <p>Footer</p>
        </div>
    )
}

export default MainApp
// di bagian sini dibutuhkan router sebagai pemindahan antar page tetapi browserouter hanya bisa dipakai untuk 1 file saja !

// SEMENTARA USELESS
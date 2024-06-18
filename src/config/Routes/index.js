import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register} from '../../pages';
import CreateBlog from '../../pages/CreateBlog';
import DetailBlog from '../../pages/DetailBlog';
import Home from '../../pages/Home';

const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create-blog" element={<CreateBlog />} />
                <Route path="/detail-blog" element={<DetailBlog/>} />
            </Routes>
        </Router>
    )
}

export default RoutesComponent

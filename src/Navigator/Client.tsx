import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loadable from 'react-loadable';

import Loading from '../components/Loading/Loading';
import Navbar from '../components/ClientNavbar/ClientNavbar';


const Client = () => {
    const Home = Loadable({
        loader: () => import('../pages/Home/Home'),
        loading: Loading,
    })
    
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/*" element={<Home />} />
        </Routes>
    </div>
  )
}

export default Client
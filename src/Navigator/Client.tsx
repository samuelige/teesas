import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loadable from 'react-loadable';

import Loading from '../components/Loading/Loading';


const Client = () => {
    const UserLogin = Loadable({
        loader: () => import('../pages/Login/Login'),
        loading: Loading,
    })

    const UserRegister = Loadable({
        loader: () => import('../pages/Register/Register'),
        loading: Loading,
    })
    
  return (
    <div>
        <Routes>
            <Route path="/" element={<UserLogin />} />
            <Route path="/register" element={<UserRegister />} />
        </Routes>
    </div>
  )
}

export default Client
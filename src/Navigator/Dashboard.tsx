import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loadable from 'react-loadable';

import Loading from '../components/Loading/Loading';
import Header from '../container/Header/Header';
import Navbar from '../container/Navbar/Navbar';
import Footer from '../container/Footer/Footer';
const Dashboard = () => {

  const Home = Loadable({
    loader: () => import('../pages/UserHome/UserHome'),
    loading: Loading,
  })
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default Dashboard
import React, { FC, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Loader from '../components/Loading/Loading'
import Client from './Client'
import Dashboard from './Dashboard'

const Navigation: FC = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
      <Routes>
          <Route path="/*" element={<Client/>} />
          <Route path="/dashboard*" element={<Dashboard/>}/>
          <Route
            path="*"
            element={<Navigate to="/*" replace />}
          />
      </Routes>
    </BrowserRouter>
    </Suspense>
  )
}

export default Navigation
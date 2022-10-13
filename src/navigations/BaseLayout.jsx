import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../pages/main'
import Works from '../pages/works'
import Performance from '../pages/performance'
import NotFound from '../pages/notFound'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BaseLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/works" exact element={<Works />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default BaseLayout
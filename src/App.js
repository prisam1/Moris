import React from 'react'
import {Route, Routes } from 'react-router-dom'
import HomePage from './Components/Home'
import AboutPage from './Components/About'
import ContactPage from './Components/Contact'
import SettingsPage from './Components/Setting'
import Layout from './Layout/layout'
import './App.scss'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}

export default App

import React from 'react'
import Navbar from './components/layout/Navbar'
import MainContent from './components/pages/MainContent'
import DetailNote from './components/pages/DetailNote'
import CreateNote from './components/pages/CreateNote'
import { Route, Routes } from 'react-router'


const App = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<MainContent />}/>
          <Route path='/create' element={<CreateNote />} />
          <Route path='/note/:id' element={<DetailNote />} />
        </Routes>
      </div>
    </>
  )
}

export default App
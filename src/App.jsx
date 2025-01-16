import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MuiModal from './Modal'
import AntNavbar from './Navbar'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MuiModal />} />
        <Route path='/navbar' element={<AntNavbar />} />
      </Routes>
    </Router>
  )
}

export default App

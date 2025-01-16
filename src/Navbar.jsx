import React from 'react'
import { Menu } from 'antd'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function AntNavbar () {
  const [activePage, setActivePage] = React.useState('home')
  const navigate = useNavigate()

  const handleMenuClick = page => {
    setActivePage(page)
  }

  const gotToModalPage = () => {
    navigate('/')
  }

  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item onClick={() => handleMenuClick('home')} key='1'>
          Home
        </Menu.Item>

        <Menu.Item onClick={() => handleMenuClick('about')} key='2'>
          About
        </Menu.Item>

        <Menu.Item onClick={() => handleMenuClick('contact')} key='3'>
          Contact
        </Menu.Item>
      </Menu>

      {activePage === 'home' && (
        <h1>Home Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
      )}
      {activePage === 'about' && (
        <h1>About Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
      )}
      {activePage === 'contact' && (
        <h1>Contact Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
      )}

      <Button
        style={{ margin: '20px' }}
        variant='outlined'
        onClick={gotToModalPage}
      >
        Back
      </Button>
    </div>
  )
}

export default AntNavbar

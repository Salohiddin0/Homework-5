import React from 'react'
import { Button, Modal } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function MuiModal () {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const goToNextPage = () => {
    setOpen(false)
    navigate('/navbar')
  }

  return (
    <>
      <Button
        variant='contained'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '20px auto',
          marginTop: '250px'
        }}
        onClick={handleOpen}
      >
        Open Modal
      </Button>

      <Button
        sx={{ display: 'flex', justifyContent: 'center', margin: '20px auto' }}
        variant='outlined'
        onClick={goToNextPage}
      >
        Next Page
      </Button>

      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            padding: '20px',
            margin: '100px auto',
            background: 'white',
            width: '300px',
            textAlign: 'center'
          }}
        >
          <h2>Material-UI Modal</h2>
          <p>This is a sample Modal using Material-UI.</p>
          <Button onClick={handleClose} variant='contained' sx={{ margin: '10px' }}>
            Close
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default MuiModal

import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material'

const Confirmation = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        textAlign: 'center',
        gap: 2,
      }}
    >
      <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main' }} />
      <Typography variant="h4" component="h1">
        Thank you for your order!
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500 }}>
        Your order has been placed successfully. We've sent you an email with all the details about your order.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        size="large"
        sx={{ mt: 3 }}
      >
        Continue Shopping
      </Button>
    </Box>
  )
}

export default Confirmation
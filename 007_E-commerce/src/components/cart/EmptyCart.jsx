import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'

const EmptyCart = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        textAlign: 'center',
        gap: 2,
      }}
    >
      <ShoppingCartIcon sx={{ fontSize: 60, color: 'text.secondary' }} />
      <Typography variant="h5" component="h2">
        Your cart is empty
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Looks like you haven't added any items to your cart yet
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

export default EmptyCart
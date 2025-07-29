import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Grid,
  IconButton,
  TextField,
} from '@mui/material'
import { Delete as DeleteIcon } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import EmptyCart from '../components/cart/EmptyCart'

const CartPage = () => {
  const {
    cartItems,
    cartTotal,
    cartCount,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart()

  if (cartCount === 0) {
    return <EmptyCart />
  }

  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = parseInt(newQuantity)
    if (!isNaN(quantity)) {
      updateQuantity(productId, quantity)
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Subtotal</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{ width: 60, height: 60, mr: 2, objectFit: 'contain' }}
                    />
                    <Typography variant="body1">{item.title}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                <TableCell align="center">
                  <TextField
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                    inputProps={{ min: 1 }}
                    sx={{ width: 80 }}
                  />
                </TableCell>
                <TableCell align="right">
                  ${(item.price * item.quantity).toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => removeFromCart(item.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container justifyContent="flex-end" spacing={3}>
        <Grid item xs={12} md={4}>
          <Box
            component={Paper}
            elevation={2}
            sx={{ p: 3, display: 'flex', flexDirection: 'column' }}
          >
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 1,
              }}
            >
              <Typography>Subtotal</Typography>
              <Typography>${cartTotal.toFixed(2)}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 1,
              }}
            >
              <Typography>Shipping</Typography>
              <Typography>Free</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 3,
              }}
            >
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">${cartTotal.toFixed(2)}</Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/checkout"
              fullWidth
              sx={{ mb: 2 }}
            >
              Proceed to Checkout
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={clearCart}
              fullWidth
            >
              Clear Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CartPage
import { useParams } from 'react-router-dom'
import { Box, Container, Grid, Typography, Button, Divider, Chip } from '@mui/material'
import { useProducts } from '../context/ProductsContext'
import { useCart } from '../context/CartContext'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import ErrorMessage from '../components/ui/ErrorMessage'
import Rating from '../components/product/Rating'

const ProductPage = () => {
  const { id } = useParams()
  const { getProductById } = useProducts()
  const { addToCart } = useCart()
  const product = getProductById(id)

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <ErrorMessage message="Product not found" />
      </Container>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, 1)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: 500,
              objectFit: 'contain',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={product.rating.rate} />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({product.rating.count} reviews)
            </Typography>
          </Box>
          <Chip
            label={product.category}
            color="primary"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
            ${product.price.toFixed(2)}
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
            {product.description}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleAddToCart}
            sx={{ mt: 2 }}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductPage
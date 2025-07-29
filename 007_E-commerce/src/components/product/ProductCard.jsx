import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material'
import { useCart } from '../../context/CartContext'
import Rating from './Rating'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product, 1)
  }

  return (
    <Card
      component={Link}
      to={`/product/${product.id}`}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        '&:hover': {
          boxShadow: 3,
        },
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{
          height: 200,
          objectFit: 'contain',
          p: 2,
          backgroundColor: 'background.paper',
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2">
          {product.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={product.rating.rate} />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({product.rating.count})
          </Typography>
        </Box>
        <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          size="small"
          fullWidth
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  )
}

export default ProductCard
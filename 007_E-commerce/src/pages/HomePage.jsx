import { useEffect, useState } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useProducts } from '../context/ProductsContext'
import ProductCard from '../components/product/ProductCard'
import CategoryFilter from '../components/product/CategoryFilter'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import ErrorMessage from '../components/ui/ErrorMessage'

const HomePage = () => {
  const { products, loading, error, categories } = useProducts()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      )
      setFilteredProducts(filtered)
    }
  }, [selectedCategory, products])

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Products
        </Typography>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </Box>
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default HomePage
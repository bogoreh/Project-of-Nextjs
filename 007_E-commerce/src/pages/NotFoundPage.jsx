import { Box, Button, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h1" component="h1" sx={{ fontSize: '4rem', fontWeight: 'bold', mb: 2 }}>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>
      </Box>
      <Button
        component={Link}
        to="/"
        variant="contained"
        size="large"
      >
        Go to Homepage
      </Button>
    </Container>
  )
}

export default NotFoundPage
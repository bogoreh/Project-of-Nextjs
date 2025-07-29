import { Box, CircularProgress, Typography } from '@mui/material'

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        gap: 2,
      }}
    >
      <CircularProgress />
      <Typography variant="body1">Loading...</Typography>
    </Box>
  )
}

export default LoadingSpinner
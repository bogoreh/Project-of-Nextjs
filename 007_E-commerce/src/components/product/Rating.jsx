import { Box } from '@mui/material'
import { Star as StarIcon, StarBorder as StarBorderIcon } from '@mui/icons-material'

const Rating = ({ value }) => {
  const stars = []
  const fullStars = Math.floor(value)
  const hasHalfStar = value % 1 >= 0.5

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<StarIcon key={i} color="primary" fontSize="small" />)
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<StarIcon key={i} color="primary" fontSize="small" />)
    } else {
      stars.push(<StarBorderIcon key={i} color="primary" fontSize="small" />)
    }
  }

  return <Box sx={{ display: 'flex' }}>{stars}</Box>
}

export default Rating
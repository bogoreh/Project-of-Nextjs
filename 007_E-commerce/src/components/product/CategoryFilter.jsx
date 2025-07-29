import { Box, Button, ButtonGroup } from '@mui/material'

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      <ButtonGroup variant="outlined" size="small">
        <Button
          variant={selectedCategory === 'all' ? 'contained' : 'outlined'}
          onClick={() => onSelectCategory('all')}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'contained' : 'outlined'}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  )
}

export default CategoryFilter
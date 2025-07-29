import { useForm } from 'react-hook-form'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'

const PaymentForm = ({ onSubmit, onBack, initialValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues || {},
  })

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" gutterBottom>
        Payment Method
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name on Card"
            {...register('nameOnCard', { required: 'Name on card is required' })}
            error={!!errors.nameOnCard}
            helperText={errors.nameOnCard?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Card Number"
            {...register('cardNumber', {
              required: 'Card number is required',
              pattern: {
                value: /^[0-9]{16}$/,
                message: 'Invalid card number (16 digits required)',
              },
            })}
            error={!!errors.cardNumber}
            helperText={errors.cardNumber?.message}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Expiry Date"
            placeholder="MM/YY"
            {...register('expiryDate', {
              required: 'Expiry date is required',
              pattern: {
                value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                message: 'Invalid expiry date (MM/YY format)',
              },
            })}
            error={!!errors.expiryDate}
            helperText={errors.expiryDate?.message}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="CVV"
            {...register('cvv', {
              required: 'CVV is required',
              pattern: {
                value: /^[0-9]{3,4}$/,
                message: 'Invalid CVV (3 or 4 digits)',
              },
            })}
            error={!!errors.cvv}
            helperText={errors.cvv?.message}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button onClick={onBack}>Back</Button>
        <Button type="submit" variant="contained">
          Continue to Review
        </Button>
      </Box>
    </Box>
  )
}

export default PaymentForm
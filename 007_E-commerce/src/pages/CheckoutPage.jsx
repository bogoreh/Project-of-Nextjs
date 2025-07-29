import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Grid,
  Paper,
} from '@mui/material'
import { useCart } from '../context/CartContext'
import CheckoutForm from '../components/checkout/CheckoutForm'
import OrderSummary from '../components/checkout/OrderSummary'
import PaymentForm from '../components/checkout/PaymentForm'
import Confirmation from '../components/checkout/Confirmation'

const steps = ['Shipping', 'Payment', 'Review']

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [shippingData, setShippingData] = useState(null)
  const [paymentData, setPaymentData] = useState(null)
  const { cartItems, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleShippingSubmit = (data) => {
    setShippingData(data)
    handleNext()
  }

  const handlePaymentSubmit = (data) => {
    setPaymentData(data)
    handleNext()
  }

  const handleCompleteOrder = () => {
    // In a real app, you would send the order to your backend here
    console.log('Order completed:', { shippingData, paymentData, cartItems })
    clearCart()
    handleNext()
  }

  if (cartItems.length === 0 && activeStep !== steps.length) {
    navigate('/cart')
    return null
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <Confirmation />
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Paper elevation={2} sx={{ p: 3 }}>
              {activeStep === 0 && (
                <CheckoutForm
                  onSubmit={handleShippingSubmit}
                  initialValues={shippingData}
                />
              )}
              {activeStep === 1 && (
                <PaymentForm
                  onSubmit={handlePaymentSubmit}
                  initialValues={paymentData}
                  onBack={handleBack}
                />
              )}
              {activeStep === 2 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Review Your Order
                  </Typography>
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Shipping Information
                    </Typography>
                    <Typography>
                      {shippingData?.firstName} {shippingData?.lastName}
                    </Typography>
                    <Typography>{shippingData?.address}</Typography>
                    <Typography>
                      {shippingData?.city}, {shippingData?.state}{' '}
                      {shippingData?.zipCode}
                    </Typography>
                    <Typography>{shippingData?.country}</Typography>
                    <Typography>{shippingData?.phone}</Typography>
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Payment Information
                    </Typography>
                    <Typography>
                      {paymentData?.cardNumber.replace(/\d(?=\d{4})/g, '*')}
                    </Typography>
                    <Typography>
                      Expires: {paymentData?.expiryDate}
                    </Typography>
                    <Typography>CVV: ***</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={handleBack} sx={{ mr: 2 }}>
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleCompleteOrder}
                    >
                      Place Order
                    </Button>
                  </Box>
                </Box>
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <OrderSummary items={cartItems} total={cartTotal} />
          </Grid>
        </Grid>
      )}
    </Container>
  )
}

export default CheckoutPage
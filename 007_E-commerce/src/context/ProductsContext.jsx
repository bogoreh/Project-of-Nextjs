import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          axios.get('https://fakestoreapi.com/products'),
          axios.get('https://fakestoreapi.com/products/categories'),
        ])
        setProducts(productsRes.data)
        setCategories(categoriesRes.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const getProductById = (id) => {
    return products.find((product) => product.id === parseInt(id))
  }

  const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category)
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        categories,
        getProductById,
        getProductsByCategory,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProducts = () => useContext(ProductsContext)
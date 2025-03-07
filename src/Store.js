import { configureStore } from '@reduxjs/toolkit'
import ProductDetailsReducer from './utilities/ProductBasics.js'

export default configureStore({
    reducer: {
        ProductDetails : ProductDetailsReducer,
    },
})
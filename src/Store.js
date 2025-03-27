import {combineReducers, configureStore} from '@reduxjs/toolkit'
import ProductDetailsReducer from './utilities/ProductBasics.js'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['product']
}

const rootReducer = combineReducers({
    product: ProductDetailsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: {
        ProductDetails : persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
const persistor = persistStore(store)

export {store, persistor}
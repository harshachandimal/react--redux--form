import {createSlice} from "@reduxjs/toolkit";

export const ProductBasics= createSlice({
    name: "ProductDetails",
    initialState: {
        productDetails: {},
    },
    reducers : {
        storeProductDetails: (state, action) => {}
    }
})

export default ProductBasics.reducer

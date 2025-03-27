import {createSlice} from "@reduxjs/toolkit";

export const ProductBasicsSlice= createSlice({
    name: "productDetails",
    initialState: {
        productDetails: {},
    },
    reducers : {
        storeProductDetails: (state, action) => {
            console.log(action.payload);

            state.productDetails = action.payload;
        },
        resetProductDetails: (state) => {
            state.productDetails = {}
        },

    },
})
export const {storeProductDetails, resetProductDetails} = ProductBasicsSlice.actions;

export default ProductBasicsSlice.reducer

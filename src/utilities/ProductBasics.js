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
        }
    }
})
export const {storeProductDetails} = ProductBasicsSlice.actions;

export default ProductBasicsSlice.reducer

import InputField from "../../Common/InputField.jsx";
import PropTypes from "prop-types";
import Button from "../../Common/Button.jsx";
import FormHead from "../../Common/FormHead.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  resetProductDetails,
  storeProductDetails,
} from "../../../utilities/ProductBasics.js";
import { useEffect, useState } from "react";

const ProductBasicDetailsForm = ({
  setProductDetails,
  handleNextForm,
  ProductDetails,
}) => {
  const [existingProductDetails, setExistingProductDetails] = useState({});
  const dispatch = useDispatch();
  const savedProductDetails = useSelector(
    (state) => state.ProductDetails.product.productDetails,
  );
  useEffect(() => {
    setExistingProductDetails(savedProductDetails);
  }, [savedProductDetails]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setProductDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(storeProductDetails(existingProductDetails));
    handleNextForm();
  };

  const reSetDetails = () => {
    dispatch(resetProductDetails);
  };

  return (
    <div>
      <form className="max-w-sm mx-auto " onSubmit={handleSubmit}>
        <FormHead formName="Product Basic Deatils" />

        <button type="button" onClick={reSetDetails} className="red-button">
          Reset
        </button>
        <InputField
          type="text"
          value={existingProductDetails.ProductName}
          name="ProductName"
          tagName="Product Name"
          handleInputChange={handleInputChange}
        />
        <InputField
          type="number"
          value={existingProductDetails.product_quantity}
          name="product_quantity"
          tagName="Product Quantity"
          handleInputChange={handleInputChange}
        />
        <InputField
          type="number"
          value={existingProductDetails.product_price}
          name="product_price"
          tagName="Product Price"
          handleInputChange={handleInputChange}
        />
        <Button buttonName="Fill Warranty Details" buttonStyle="blue-button" />
      </form>
    </div>
  );
};
ProductBasicDetailsForm.propTypes = {
  ProductDetails: PropTypes.object.isRequired,
  setProductDetails: PropTypes.func.isRequired,
  handleNextForm: PropTypes.func.isRequired,
};
export default ProductBasicDetailsForm;

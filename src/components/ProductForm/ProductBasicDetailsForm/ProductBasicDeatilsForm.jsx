import InputField from "../../Common/InputField.jsx";
import PropTypes from "prop-types";
import Button from "../../Common/Button.jsx";

const ProductBasicDeatilsForm = ({ handleNextForm }) => {
  return (
    <div>
      <form className="max-w-sm mx-auto ">
        <div>
          <h1 className="font-bold text-center ">Product Basic Detaills</h1>
        </div>
        <InputField type="text" name="ProductName" tagName="Product Name" />
        <InputField
          type="number"
          name="product_quantity"
          tagName="Product Quantity"
        />
        <InputField
          type="number"
          name="product_price"
          tagName="Product Price"
        />
        <Button
          executingMethod={handleNextForm}
          buttonName="Fill Warranty Details"
          buttonStyle= "blue-button"
        />
      </form>
    </div>
  );
};
ProductBasicDeatilsForm.propTypes = {
  handleNextForm: PropTypes.func.isRequired,
};
export default ProductBasicDeatilsForm;

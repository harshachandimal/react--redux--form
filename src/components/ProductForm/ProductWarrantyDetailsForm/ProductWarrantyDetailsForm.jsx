import InputField from "../../Common/InputField.jsx";
import PropTypes from "prop-types";
import FormHead from "../../Common/FormHead.jsx";

const ProductWarrantyDetailsForm = ({ handleBackForm }) => {
  return (

      <div>

        <form className="max-w-sm mx-auto ">
          <button type = 'button' onClick={handleBackForm} className= 'dark-button'>Back</button>
          <FormHead formName="Product Warranty Deatils"/>
          <InputField
              type="text"
              name="WarrantyPeriod"
              tagName="Warranty Period"
          />
          <InputField
              type="date"
              name="WarrantyStartDate"
              tagName="Warranty Start Date"
          />
          <InputField
              type="date"
              name="WarrantyEndDate"
              tagName="Warranty End Date"
          />

        </form>
      </div>
  );
};

ProductWarrantyDetailsForm.propTypes = {
  handleBackForm: PropTypes.func.isRequired,
};

export default ProductWarrantyDetailsForm;

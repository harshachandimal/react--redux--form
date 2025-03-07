import InputField from "../../Common/InputField.jsx";
import PropTypes from "prop-types";
import Button from "../../Common/Button.jsx";
import FormHead from "../../Common/FormHead.jsx";

const ProductWarrantyDeatilsForm = ({ handleBackForm }) => {
  return (
    <div>
      <form className="max-w-sm mx-auto ">
        <FormHead formName= "Product Warranty Deatils"/>
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
        <Button executingMethod={handleBackForm} buttonName="Back"
                buttonStyle="dark-button"/>
      </form>
    </div>
  );
};

ProductWarrantyDeatilsForm.propTypes = {
  handleBackForm: PropTypes.func.isRequired,
};

export default ProductWarrantyDeatilsForm;

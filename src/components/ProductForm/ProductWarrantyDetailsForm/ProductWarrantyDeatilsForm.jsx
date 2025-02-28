import InputField from "../../Common/InputField.jsx";
import PropTypes from "prop-types";

const ProductWarrantyDeatilsForm = ({handleBackForm}) => {
  return (
    <div>
      <form className="max-w-sm mx-auto ">
        <div>
          <h1 className="font-bold text-center ">Product Basic Detaills</h1>
        </div>
        <InputField type="text" name="WarrantyPeriod" tagName="Warranty Period" />
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
        <button type="button" className="button" onClick={handleBackForm}>
          Back
        </button>
      </form>
    </div>
  );
};

ProductWarrantyDeatilsForm.propTypes = {
  handleBackForm: PropTypes.func.isRequired,
}

export default ProductWarrantyDeatilsForm;

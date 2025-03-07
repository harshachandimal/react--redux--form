import PropTypes from "prop-types";

const FormHead = ({formName}) => {
  return (
    <div>
      <h1 className="font-bold text-center "> {formName}</h1>
    </div>
  );
};

FormHead.propTypes = {
    formName: PropTypes.string.isRequired
}

export default FormHead;

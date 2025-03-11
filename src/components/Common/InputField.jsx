import PropTypes from "prop-types";

const InputField = ({type, name, tagName, handleInputChange}) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {tagName}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="input-field"
        required
        onChange={handleInputChange}
      />
    </div>
  );
};
InputField.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
};
export default InputField;

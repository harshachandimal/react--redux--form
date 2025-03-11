import PropTypes from "prop-types";

const Button = ({buttonName,buttonStyle}) => {
    return (

            <button
                type="submit"
                className= {buttonStyle}
            >
                {buttonName}
            </button>

    );
};
Button.propTypes = {
    buttonName: PropTypes.string.isRequired,
    buttonStyle: PropTypes.string.isRequired,
}

export default Button;
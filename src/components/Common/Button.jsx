import PropTypes from "prop-types";

const Button = ({executingMethod,buttonName,buttonStyle}) => {
    return (

            <button
                type="button"
                onClick={executingMethod}
                className= {buttonStyle}
            >
                {buttonName}
            </button>

    );
};
Button.propTypes = {
    executingMethod: PropTypes.func.isRequired,
    buttonName: PropTypes.string.isRequired,
    buttonStyle: PropTypes.string.isRequired,
}

export default Button;
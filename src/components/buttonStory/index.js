import PropTypes from 'prop-types';
import './styles.scss';

const ButtonStory = ({ text, theme, size, ...props }) => {
  return (
    <button
      type="button"
      className={`button button__theme--${theme} button__size--${size}`}
      {...props}
    >
      {text}
    </button>
  );
};

ButtonStory.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['classic', 'validation', 'alert']),
  size: PropTypes.oneOf(['mini', 'medium', 'large'])
};

ButtonStory.defaultProps = {
  theme: 'classic',
  size: 'medium'
};

export default ButtonStory;

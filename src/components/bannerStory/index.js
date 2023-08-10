import PropTypes from 'prop-types';
import './styles.scss';

const BannerStory = ({ text, black, ...props }) => {
  return (
    <div className={`banner${black ? ' banner--black' : ''}`} {...props}>
      <h1>{text}</h1>
    </div>
  );
};

BannerStory.propTypes = {
  text: PropTypes.string.isRequired,
  black: PropTypes.bool
};

BannerStory.defaultProps = {
  black: false
};

export default BannerStory;

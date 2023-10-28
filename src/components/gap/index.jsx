import PropTypes from 'prop-types';

export default function Gap({ className }) {
  return (
    <div className={ className }>
    </div>
  );
}

Gap.propTypes = {
  className: PropTypes.string.isRequired,
};

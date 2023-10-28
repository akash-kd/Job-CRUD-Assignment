import PropTypes from 'prop-types';

export default function OutlineButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className='px-4 py-2 border border-primary text-base text-primary font-medium leading-6 rounded-[6px] shadow-sm'
    >
      {text}
    </button>
  );
}

OutlineButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

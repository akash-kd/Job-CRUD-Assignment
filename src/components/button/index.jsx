import PropTypes from 'prop-types';

export default function Button({ text, onClick }) {
  return <button onClick={onClick} className='px-4 py-2 bg-primary text-white rounded-[6px] shadow-sm'>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

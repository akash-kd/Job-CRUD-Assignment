import PropTypes from 'prop-types';

export default function Button({ icon, onClick}) {
  return (
    <button
      onClick={onClick}
      className='p-2 flex justify-center items-center text-white rounded-[6px] border border-transparent hover:border hover:border-ash-mid'
    >
      { icon }
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

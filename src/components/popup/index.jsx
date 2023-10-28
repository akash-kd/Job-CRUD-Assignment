import PropTypes from 'prop-types';

export default function Popup({ children }) {
  return (
    <div className='absolute top-0 flex items-center justify-center w-screen h-screen bg-white'>
      {children}
    </div>
  );
}

Popup.propTypes = {
  children: PropTypes.node.isRequired,
};

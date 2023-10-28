import PropTypes from 'prop-types';

export default function NumField({
  label,
  placeholder,
  required = false,
  onChange,
  value,
}) {
  return (
    <div className='flex flex-col w-full'>
      {label ? (
				<label className='mb-1 font-medium text-sm text-ash-dark'>
				  {label}
				  {required ? <span className='text-red'>*</span> : <></>}
				</label>
			) : (
				<div className='h-5 mb-1'></div>
			)}
      <input
        type='number'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className='h-10 w-full px-pri text-sm leading-5 text-ash-darker border border-ash-mid outline-none rounded-sec placeholder:text-ash-medium'
      ></input>
    </div>
  );
}

NumField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

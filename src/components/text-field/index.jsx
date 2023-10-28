import PropTypes from 'prop-types';

export default function TextField({
  label,
  placeholder,
  required = false,
  onChange,
  value,
}) {
  return (
    <div className='flex flex-col w-full'>
      <label className='mb-1 font-medium text-sm text-ash-dark'>
        {label}
        {required ? <span className='text-red'>*</span> : <></>}
      </label>
      <input
        type='text'
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className='h-10 w-full px-pri text-sm leading-5 text-ash-darker border border-ash-mid outline-none rounded-sec placeholder:text-ash-medium'
      ></input>
    </div>
  );
}

TextField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

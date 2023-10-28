import PropTypes from 'prop-types';
import { useState } from 'react';
export default function OptionField({
  label,
  required = false,
  data,
  setData,
}) {
  return (
    <div className='flex flex-col'>
      <label className='mb-1 font-medium text-sm text-ash-dark'>
        {label}
        {required ? <span className='text-red'>*</span> : <></>}
      </label>
      <div className='flex my-2 gap-4'>
        <div>
          <input
            type='radio'
            name='quick-apply'
            checked={data?.applyType == 'quick-apply' || false}
            onChange={(e) => setData({ ...data, applyType: 'quick-apply' })}
          />
          <label htmlFor='quick-apply' className='ml-1 text-ash-medium'>
						Quick Apply
          </label>
        </div>
        <div>
          <input
            type='radio'
            name='ext-apply'
            checked={data?.applyType == 'ext-apply' || false}
            onChange={(e) => setData({ ...data, applyType: 'ext-apply' })}
          />
          <label htmlFor='ext-apply' className='ml-1 text-ash-medium'>
						External Apply
          </label>
        </div>
      </div>
    </div>
  );
}

OptionField.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  data: PropTypes.object,
  setData: PropTypes.func,
};

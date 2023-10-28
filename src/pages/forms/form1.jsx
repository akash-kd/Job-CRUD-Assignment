import { useState } from 'react';
import { TextField, Gap, Button } from '@components';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { toFormData } from 'axios';
export default function Form1({ setStep, data, setData, setPopup }) {
  const [error, setError] = useState();
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <div className='flex flex-col gap-6 w-[577px] p-8 border border-ash-mid rounded-pri'>
        <div className='flex items-center justify-between flex-grow text-ash-darker'>
          <p className='text-[20px] leading-7'>Create a Job</p>
          <p className='text-base leading-6'>Step 1</p>
        </div>

        <TextField
          label='Job Title'
          placeholder='ex. UX UI Designer'
          required={true}
          value={data.title}
          onChange={(e) => {
            setData({ ...data, title: e.target.value });
          }}
        />
        <TextField
          label='Company name'
          placeholder='ex. Google'
          required={true}
          value={data.company}
          onChange={(e) => {
            setData({ ...data, company: e.target.value });
          }}
        />
        <TextField
          label='Industry'
          placeholder='ex. Information Technology'
          required={true}
          value={data.industry}
          onChange={(e) => {
            setData({ ...data, industry: e.target.value });
          }}
        />
        <div className='flex flex-row w-full gap-6'>
          <TextField
            label='Location'
            placeholder='ex. Chennai'
            onChange={(e) => {
              setData({ ...data, location: e.target.value });
            }}
            value={data.location}
          />
          <TextField
            label='Remote type'
            placeholder='ex. In-office'
            onChange={(e) => {
              setData({ ...data, type: e.target.value });
            }}
            value={data.type}
          />
        </div>
        {error ? (
					<a className='text-sm text-red'>* Fields are missing</a>
				) : (
					<></>
				)}
        <Gap className='h-24' />
        <div className='flex flex-grow justify-end'>
          <Button
            text='Next'
            onClick={() => {
              if (data.title === undefined || data.title.length === 0)
                toast.error('Title is Missing');
              if (data.company === undefined || data.company.length === 0)
                toast.error('Company is Missing');
              if (data.industry === undefined || data.industry.length === 0)
                toast.error('Industry is Missing');

              if (data.title && data.company && data.industry)
                setStep((step) => step + 1);
            }}
          />
        </div>
      </div>
      <button
        className='bg-none outline-none my-4 text-ash-medium'
        onClick={() => {
          setPopup(false);
          setStep(0);
          setData({});
        }}
      >
				Close
      </button>
    </div>
  );
}

Form1.propTypes = {
  setStep: PropTypes.func,
  data: PropTypes.object,
  setData: PropTypes.func,
  setPopup: PropTypes.func,
};

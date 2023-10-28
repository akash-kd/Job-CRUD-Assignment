import { TextField, NumField, OptionField, Gap, Button } from '@components';
import PropTypes from 'prop-types';
import { createJob } from '@api/job';
import toast, { Toaster } from 'react-hot-toast';
import { updateJob } from '../../api/job';

export default function Form2({ setStep, data, setData, setPopup }) {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-6 w-[577px] p-8 border border-ash-mid rounded-pri'>
        <div className='flex items-center justify-between flex-grow text-ash-darker'>
          <p className='text-[20px] leading-7'>Create a Job</p>
          <p className='text-base leading-6'>Step 2</p>
        </div>

        <div className='flex flex-row w-full gap-6'>
          <NumField
            label='Experience'
            placeholder='Minimum'
            onChange={(e) => {
              setData({ ...data, expMin: e.target.value });
            }}
            value={data?.expMin}
          />
          <NumField
            placeholder='Maximum'
            onChange={(e) => {
              setData({ ...data, expMax: e.target.value });
            }}
            value={data?.expMax}
          />
        </div>
        <div className='flex flex-row w-full gap-6'>
          <NumField
            label='Salary'
            placeholder='Minimum'
            onChange={(e) => {
              setData({ ...data, salMin: e.target.value });
            }}
            value={data?.salMin}
          />
          <NumField
            placeholder='Maximum'
            onChange={(e) => {
              setData({ ...data, salMax: e.target.value });
            }}
            value={data?.salMax}
          />
        </div>
        <TextField
          label='Total employee'
          placeholder='ex. 100'
          onChange={(e) => {
            setData({ ...data, emp: e.target.value });
          }}
          value={data?.emp}
        />
        <OptionField
          label='Apply type'
          required
          data={data}
          setData={setData}
        />
        <Gap className='h-24' />
        <div className='flex flex-grow justify-end'>
          <Button
            text='Save'
            onClick={async () => {
              if (data?.applyType === undefined)
                toast.error('Apply Type is Missing');
              else {
                if (data?.id) {
                  await updateJob(data);
                  toast.success('Job Updated Successfully');
                } else {
                  await createJob(data);
                  toast.success('Job Created Successfully');
                }
                setStep((step) => step + 1);
                setPopup(false);
                setData({});
              }
            }}
          />
        </div>
      </div>
      <button
        className='bg-none outline-none my-4 text-ash-medium'
        onClick={() => {
          setStep(0);
          setPopup(false);
          setData({});
        }}
      >
				Close
      </button>
    </div>
  );
}

Form2.propTypes = {
  setStep: PropTypes.func,
  data: PropTypes.object,
  setData: PropTypes.func,
  setPopup: PropTypes.func,
};

import { Button, OutlineButton, IconButton } from '@components';
import PropTypes from 'prop-types';
import { JobExampleData } from '@utils/example-data/job';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import { deleteJob } from '@api/job';
import toast from 'react-hot-toast';

export default function Job({ data, setData, setPopup, triggerRefresh }) {
  // Console.log(data);
  return (
    <div className='flex w-[830px] border rounded-pri py-4 px-6'>
      <div className='mr-2'>
        <img
          className='w-12 h-12 rounded-sec'
          src='https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456'
          alt='Netflix Logo'
        />
      </div>

      <div className='flex flex-row w-full justify-between'>
        <main>
          <div className='flex flex-col flex-shrink'>
            <p className='text-2xl leading-8 font-normal'>
              {data?.title || JobExampleData.title}
            </p>
            <p className='text-base leading-6 font-normal'>
              {data?.company || JobExampleData.company} -{' '}
              {data?.industry || JobExampleData.industry}
            </p>
            <p className='text-base leading-6 font-normal text-[#646464]'>
              {data?.location || JobExampleData.location}, (
              {data?.type || JobExampleData.type})
            </p>
          </div>

          <div className='flex flex-col flex-shrink my-6 gap-2 text-[#212427] text-base leading-6 font-normal'>
            <p className=''>Part-Time (9.00 am - 5.00 pm IST)</p>
            <p className=''>
							Experience ({data?.expMin || JobExampleData.expMin} -{' '}
              {data?.expMax || JobExampleData.expMax} years)
            </p>
            <p className=''>
							INR (₹) {data?.salMin || JobExampleData.salMin} -{' '}
              {data?.salMax || JobExampleData.salMax} / Month
            </p>
            <p className=''>{data?.emp || JobExampleData.emp} employees</p>
          </div>

          {data?.applyType === 'quick-apply' ? (
						<Button text='Apply Now'></Button>
					) : (
						<OutlineButton text='External Apply'></OutlineButton>
					)}
        </main>
        <div className='flex flex-row justify items-start gap-4'>
          <IconButton
            onClick={() => {
              setData(data);
              setPopup(true);
            }}
            icon={<HiPencilAlt className='w-5 h-5 text-black' />}
          />
          <IconButton
            onClick={async () => {
              await deleteJob(data);
              toast.success('Deleted Successfully');
              triggerRefresh((r) => r + 1);
            }}
            icon={<HiTrash className='w-5 h-5 text-red' />}
          />
        </div>
      </div>
    </div>
  );
}

Job.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
  setPopup: PropTypes.func,
  triggerRefresh: PropTypes.func,
};

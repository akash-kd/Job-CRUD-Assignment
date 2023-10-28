/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from 'react';
import { Button, Popup, Job } from '@components';
import { Form1, Form2 } from '@pages/forms';
import { useEffect } from 'react';
import { readJobs } from '@api/job';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';

export default function App() {
  const [step, setStep] = useState(0);
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState({});
  const [response, setResponse] = useState([]);
  const [refresh, triggerRefresh] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await readJobs();
      setResponse(res.data);
      // Console.log(res);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('Refresh');
    const fetchData = async () => {
      const res = await readJobs();
      setResponse(res.data);
      // Console.log(res);
    };
    fetchData();
  }, [refresh]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await readJobs();
      // Console.log('Step', step, res.data);
      setResponse(res.data);
    };
    if (step >= 2) {
      fetchData();
      setStep(0);
    }
  }, [step]);

  return (
    <>
      <Toaster />
      {popup ? (
				<Popup>
				  {step == 0 ? (
						<Form1
						  setStep={setStep}
						  data={data}
						  setData={setData}
						  setPopup={setPopup}
						/>
					) : (
						<Form2
						  setStep={setStep}
						  data={data}
						  setData={setData}
						  setPopup={setPopup}
						/>
					)}
				</Popup>
			) : (
				<div className='flex flex-col w-full h-full'>
				  <div className='flex items-center justify-between w-full h-16 px-32 my-8'>
				    <p>Job Assignment</p>
				    <Button text='Create Job' onClick={() => setPopup(true)} />
				  </div>
				  <div className='flex flex-col gap-8 items-center w-full grow h-max px-32 py-10'>
				    {response.map((item, index) => (
				      <Job
				        data={item}
				        key={index}
				        setData={setData}
				        setPopup={setPopup}
				        triggerRefresh={triggerRefresh}
				      />
				    ))}
				  </div>
				</div>
			)}
    </>
  );
}

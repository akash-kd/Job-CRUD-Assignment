import axios from 'axios';
import { JobExampleData } from '@utils/example-data/job';

export default async function createJob(data) {
  const response = await axios.post(
      'https://653a5819e3b530c8d9e988df.mockapi.io/job',
      data,
  );
  // console.log(response);
  return response;
}
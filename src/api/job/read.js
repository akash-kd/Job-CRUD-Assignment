import axios from 'axios';
import { JobExampleData } from '@utils/example-data/job';

const API_URL = import.meta.env.VITE_API_URL;

export default async function readJobs(data) {
  const response = await axios.get(
      `https://${API_URL}.mockapi.io/job`,
      data,
  );

  // Console.log(response);
  return response;
}

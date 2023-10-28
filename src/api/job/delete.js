import axios from 'axios';
import { JobExampleData } from '@utils/example-data/job';

const API_URL = import.meta.env.VITE_API_URL;

export default async function updateJob(data) {
  const response = await axios.delete(
      `https://${API_URL}.mockapi.io/job/${data.id}`,
  );
  // Console.log(response);
  return response;
}

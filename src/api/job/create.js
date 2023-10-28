import axios from 'axios';
import { JobExampleData } from '@utils/example-data/job';

const API_URL = import.meta.env.VITE_API_URL;

export default async function createJob(data) {
  console.log(API_URL);
  const response = await axios.post(`https://${API_URL}.mockapi.io/job`, data);
  // Console.log(response);
  return response;
}

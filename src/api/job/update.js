import axios from 'axios';
import { JobExampleData } from '@utils/example-data/job';

export default async function updateJob(data) {
  const response = await axios.put(
      `https://653a5819e3b530c8d9e988df.mockapi.io/job/${data.id}`,
      data,
  );
  // Console.log(response);
  return response;
}

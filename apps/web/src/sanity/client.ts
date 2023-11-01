import { createClient } from 'next-sanity';

const projectId = '97u2fmo5';
const dataset = 'production';
const apiVersion = 'v2023-10-09';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true
});

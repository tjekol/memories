import { createClient } from 'next-sanity';

const projectId = '97u2fmo5';
const dataset = 'production';
const apiVersion = '2021-10-21';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

import { IPicture } from './schemas';
import { groq } from 'next-sanity';

export async function getPicture(): Promise<IPicture[]> {
  const { client } = await import('@/sanity/client');
  
  return client.fetch(
    groq`*[_type == "picture"] | order(_createdAt desc){
      _id,
      name,
      description,
      "image": image.asset->url,
      createdAt
    }`,
    {
      cache: 'force-cache'
    }
  );
}

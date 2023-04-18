import axios from 'axios';

export async function getBibleList() {
  const { data } = await axios.get(
    'https://api.jakestory.me/open-bible/contents',
  );
  return data;
}

export async function getContent() {
  // const { data } = await axios.get('')
}

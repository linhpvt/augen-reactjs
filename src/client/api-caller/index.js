import axios from 'axios';
export const get = async (url) => {
  let result = { code: 100 };
  try {
    const { data: { code, data = [] } = {} } = await axios.get(url, { accept: 'application/json' });
    result = { code, data };
  } catch(err) {
    result = { ...result, err }
  }
  return result;
}

import axios from 'axios';

export const getProductDetailsRequest = async (lang: string) => {
  const res = await axios.get('http:10.0.2.2:8000/SkuList', {});
  return res;
};

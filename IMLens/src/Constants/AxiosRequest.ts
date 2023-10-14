import axios from 'axios';

export const getProductDetailsRequest = async (lang: string) => {
  const res = await axios.get('https://imagineers-401514.el.r.appspot.com/SkuList', {});
  return res;
};

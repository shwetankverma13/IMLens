export const getProductDetails = (num: string) => {
  return {
    type: 'GET_PRODUCT_DETAILS',
    payload: num,
  };
};

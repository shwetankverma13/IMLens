const initialState = {
  getProductDetailsData: [],
};

const getProductData = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  // console.log("actiona call", action.payload)
  switch (action.type) {
    case 'GET_PRODUCT_DETAILS':
      return {...state, getProductDetailsData: action.payload};
    default:
      return state;
  }
};

export default getProductData;

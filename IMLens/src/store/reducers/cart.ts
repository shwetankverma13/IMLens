const initial = {
  data: [],
  globaltotal: 0,
  globalCount: 0,
};
//whenever it uses dispatch it calls all reducers as it doesnt know kisme action hai,and state design is very important
const CartReducer = (state = initial, action: any) => {
  if (action.type == 'addItem') {
    if (action.count == 0) {
      return state;
    }
    const arr = new Array(state.data.length);
    let updatedTotal, flag, updatedCount;
    for (let i = 0; i < state.data.length; i++) {
      const elem = state.data[i];
      console.log(elem);
      arr[i] = elem;
      if (elem.id === action.id) {
        flag = true;
        if (action.title !== elem.title) {
          arr[i].title = action.title;
        }
        updatedTotal = state.globaltotal - elem.total + action.total;
        updatedCount = state.globalCount - elem.count + action.count;
        elem.total = action.total;
        elem.count = action.count;
      }
    }
    if (flag) {
      return {
        ...state,
        data: arr,
        globaltotal: updatedTotal,
        globalCount: updatedCount,
      };
    }
    return {
      ...state,
      data: [
        ...state.data,
        {
          id: action.id,
          image: action.image,
          price: action.price,
          title: action.title,
          total: action.total,
          count: action.count,
        },
      ],
      globaltotal: state.globaltotal + action.price * action.count,
      globalCount: state.globalCount + action.count,
    }; //dont forget basics of json
  } else if (action.type == 'removeItem') {
    return {
      ...state,
      data: state.data.filter(element => element.id !== action.id),
      globaltotal: state.globaltotal - action.payload2,
      globalCount: state.globalCount - action.payload3,
    };
  } else if (action.type == 'increment') {
    const id = action.payload1;
    const index = state.data.findIndex(elem => elem.id === id);
    const updatedData = state.data;
    updatedData[index].total += state.data[index].price;
    updatedData[index].count += 1;
    return {
      ...state,
      data: updatedData,
      globaltotal: state.globaltotal + state.data[index].price,
      globalCount: state.globalCount + 1,
    };
  } else if (action.type == 'decrement') {
    const id = action.payload1;
    const index = state.data.findIndex(elem => elem.id === id);
    const updatedData = state.data;
    if (updatedData[index].count > 0 && updatedData[index].total > 0) {
      updatedData[index].total -= state.data[index].price;
      updatedData[index].count -= 1;
      const price = state.data[index].price;
      if (updatedData[index].count === 0) {
        //remove item when item.count is 0
        let arr = state.data.filter(element => element.id !== id);
        console.log(arr);
        console.log(id);
        return {
          ...state,
          data: state.data.filter(element => element.id !== id),
          globaltotal: state.globaltotal - price,
          globalCount: state.globalCount - 1,
        };
      }
      return {
        ...state,
        data: updatedData,
        globaltotal: state.globaltotal - state.data[index].price,
        globalCount: state.globalCount - 1,
      };
    }
    return state;
  } else if (action.type == 'resetCart') {
    console.log('haan');
    return {...state, data: [], globaltotal: 0, globalCount: 0};
  }
  return state;
};
export default CartReducer;

import {Image} from 'react-native';
export const updateCount = () => {
  return {
    type: 'updateCount',
  };
};
export const incrementCounter = () => {
  //isme jab action dispatch ho rhe to dono reducer me ja rhe bcoz same name(incrememnt) tabhi dikkat ho rhi ek dusre me therefore we rename it to incrementCounter
  return {
    type: 'incrementCounter',
  };
};
export const decrementCounter = () => {
  return {
    type: 'decrementCounter',
  };
};
export const increment = (num1: number) => {
  return {
    type: 'increment',
    payload1: num1,
  };
};
export const decrement = (num1: number) => {
  return {
    type: 'decrement',
    payload1: num1,
  };
};
export const addItem = (
  id: string,
  img: string,
  num: number,
  str2: string,
  num2: number,
  num3: number,
) => {
  return {
    type: 'addItem',
    id: id,
    image: img,
    price: num,
    title: str2,
    total: num2,
    count: num3,
  };
};
export const removeItem = (num: number, total: number, count: number) => {
  return {
    type: 'removeItem',
    id: num,
    payload2: total,
    payload3: count,
  };
};
export const resetCart = () => {
  return {
    type: 'resetCart',
  };
};

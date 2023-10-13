import React, {useEffect} from 'react';
import axios from 'axios';

export default function GetProductDetails() {
  return useEffect(() => {
    async function getProductDetailsChange() {
      await axios.get(`http://10.0.2.2:8000/SkuList`).catch(err => {
        console.log('Err ', err);
      });
    }
    getProductDetailsChange();
  }, []);
}

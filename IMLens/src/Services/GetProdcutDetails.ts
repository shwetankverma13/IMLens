import React, { useEffect } from 'react';
import axios from 'axios';

export default function GetProductDetails() {
  return useEffect(() => {
    async function getProductDetailsChange() {
      await axios.get(`https://imagineers-401514.el.r.appspot.com/SkuList`).catch(err => {
        console.log('Err ', err);
      });
    }
    getProductDetailsChange();
  }, []);
}

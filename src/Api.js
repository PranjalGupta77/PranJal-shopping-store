import axios from 'axios';

export function getProductData(id){
  return axios
    .get("https://dummyjson.com/products/" + id)
    .then(function (respons) {
    return respons.data;
  });
}

export function getProductList(){
 return axios.get('https://dummyjson.com/products').then(function (respons) {
   return respons.data.products;
 });
 }

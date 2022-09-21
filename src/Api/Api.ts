import axios from "axios";

export const productURL = () => {

axios.get('https://api.escuelajs.co/api/v1/products')
  .then(function (response) {

    console.log(response);
  })
  .catch(function (error) {

    console.error(error);
  })
  .then(function () {

  });
  
}
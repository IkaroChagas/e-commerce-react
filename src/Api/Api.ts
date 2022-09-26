import axios from "axios";

const base = axios.create({
  baseURL: 'https://fakestoreapi.com/'
})

export const productURL = {
  getProducts: async () => {
    let res = await base('/products')
    return res.data
  },

  getProduct: async (id: string) => {
    let res = await base(`/products/${id}`)
    return res.data
  }

}
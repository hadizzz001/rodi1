const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = () => axiosClient.get('/products?populate=*')
const getProductById = (id)=>axiosClient.get(`/products/${id}?populate=*`)
const getProductsByCategoryId = (categoryId) => axiosClient.get(`/products?filters[$and][0][category][$contains]=${categoryId}&populate=*`);
//[$and][0][category][$eq]=Shampoo

export default {
    getLatestProducts,
    getProductById,
    getProductsByCategoryId,
}
import httpClient from './httpClient'

const END_POINT = '/product'

const getAllProducts = () => httpClient.get(END_POINT)
const getProduct = (productId) => httpClient.get(`${END_POINT}/${productId}`)
const createProduct = (payload) => httpClient.post(END_POINT, payload)
const updateProduct = (payload) => httpClient.put(`${END_POINT}`, payload)
const deleteProduct = (productId) => httpClient.delete(`${END_POINT}`, {
    params: {
        productId
    }
})

export {
    getAllProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    createProduct
}
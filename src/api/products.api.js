// import httpClient from './httpClient'
import clientStorage from "localforage"

// const END_POINT = '/product'

// const getAllProducts = () => httpClient.get(END_POINT)
const getAllProducts = () => {
    return clientStorage.getItem("products")
}
// const getProduct = (productId) => httpClient.get(`${END_POINT}/${productId}`)
const getProduct = (productId) => {
    let storage = []
    clientStorage.getItem('product')
    .then(value => {
        if (value) storage = value
    })
    return storage.filter(item => item.productId === productId)
}
// const createProduct = (payload) => httpClient.post(END_POINT, payload)
const createProduct = (payload) => {
    let storage = []
    return clientStorage.getItem('products')
    .then(value => {
        console.log(value)
        if (value) storage = value
        storage.push({
            productId: Date.now(),
            ...payload
        })
        clientStorage.setItem("products", storage)
    })
}
// const updateProduct = (payload) => httpClient.put(`${END_POINT}`, payload)
const updateProduct = (payload) => {
    return clientStorage.getItem('products')
    .then(value => {
        if (value) {
            for (let i = 0; i < value.length; i++) {
                if (value[i].productId == payload.productId) {
                    Object.assign(value[i], payload)
                }
            }
            clientStorage.setItem("products", value)
        }
    })
}
// const deleteProduct = (productId) => httpClient.delete(`${END_POINT}`, {
//     params: {
//         productId
//     }
// })
const deleteProduct = (productId) => {
    return clientStorage.getItem('products')
    .then(value => {
        if (value) {
            clientStorage.setItem("products", value.filter(item => item.productId != productId))
        }
    })
}

export {
    getAllProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    createProduct
}
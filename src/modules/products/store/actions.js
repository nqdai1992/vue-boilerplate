import {
    getAllProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    createProduct
} from '@/api/products.api'


export default {
    async fetchProducts ({ commit }) {
        try {
            const response = await getAllProducts() || [];
            commit('SET_PRODUCTS', response)
        } catch (err) {
            throw new Error(err)
        }
    },

    async fetchProduct ({ commit }, { productId = '' }) {
        try {
            if (!productId) throw new Error('Product id is undefined') 
            const response = await getProduct(productId);
            commit('SET_PRODUCT', response.data)
        } catch (err) {
            throw new Error(err)
        }
    },

    async removeProduct (context, { productId = '' }) {
        try {
            if (!productId) throw new Error('Product id is undefined') 
            return await deleteProduct(productId);
        } catch (err) {
            throw new Error(err)
        }
    },

    async modifyProduct (context, { payload }) {
        try {
            return await updateProduct(payload);
        } catch (err) {
            throw new Error(err)
        }
    },

    async addProduct (context, { payload }) {
        try {
            if (!payload || !(typeof payload === 'object')) throw new Error('Content of product must be object')
            return await createProduct(payload);
        } catch (err) {
            throw new Error(err)
        }
    }
}
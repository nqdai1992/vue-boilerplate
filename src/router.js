import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Products = () => import('@/modules/products/components/Products.vue')
const AddProduct = () => import('@/modules/products/components/AddProduct.vue')
const EditProduct = () => import('@/modules/products/components/EditProduct.vue')

const routes = [
    {
        path: '/',
        name: 'prodcuts',
        component: Products,
    },
    {
        path: '/add-product',
        name: 'Add Prodcut',
        component: AddProduct,
    },
    {
        path: '/edit-product/:id',
        name: 'Edit Prodcut',
        component: EditProduct,
    }
]

const navigation = [
    {
        path: '/',
        text: 'Product',
        type: 'item',
        icon: 'loyalty',
    }
]
export {
    navigation
}
export default new VueRouter({
    routes,
    mode: 'history'    
})
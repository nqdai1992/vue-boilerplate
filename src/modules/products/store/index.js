import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const defaultState = {
    name: 'Product',
    products: [],
    product: {},
}

export default {
    namespaced: true,
    state: defaultState,
    mutations,
    actions,
    getters
}
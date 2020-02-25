export default {
    SET_PRODUCTS (state, payload = []) {
        state.products = payload.slice(0);
    },
    SET_PRODUCT (state, payload = {}) {
        state.product = JSON.parse(JSON.stringify(payload))
    }
}
<template>
  <AppPage title="Edit product">
    <template v-slot:page__actions>
      <v-btn class="mr-3" color="secondary" small @click="$router.push('/')"> 
        <v-icon>keyboard_backspace</v-icon>
        Back to product list
      </v-btn>
      <v-btn color="success" small @click="saveProduct">Save changes</v-btn>
    </template>
    <template v-slot:page__content>
      <ProductInfo ref="product-info" :init-item="processedProduct" />
    </template>
  </AppPage>
</template>

<script>
import AppPage from '@/components/AppPage'
import ProductInfo from './ProductInfo'
import { mapActions, mapGetters } from 'vuex'
export default {
    components: {
        AppPage,
        ProductInfo
    },
    data () {
      return {
        productId: null,
      }
    },
    async created () {
      this.productId = this.$route.params.id
      await this.fetchProducts()
    },
    computed: {
      ...mapGetters('ProductStore', [
        'processedProducts'
      ]),
      processedProduct () {
        return this.processedProducts.find(item => item.productId == this.productId)
      }
    },
    methods: {
      ...mapActions('ProductStore', [
        'fetchProduct',
        'modifyProduct',
        'fetchProducts'
      ]),
      async saveProduct () {
        if (!this.$refs['product-info'].validate()) return
        try {
          await this.modifyProduct({
            payload: {
              productId: this.productId,
              ...this.$refs['product-info'].payload
            }
          })
          this.$snackbar.open({
            state: 'success',
            content: 'This product is updated successfully'
          })
          this.$router.push('/')
        } catch (err) {
          this.$snackbar.open({
            state: 'error',
            content: err
          })
        }
      }
    }
}
</script>

<style>

</style>
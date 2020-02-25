<template>
  <AppPage title="Add product">
    <template v-slot:page__actions>
      <v-btn class="mr-3" color="secondary" small @click="$router.push('/')">
        <v-icon>keyboard_backspace</v-icon>
        Back to product list
      </v-btn>
      <v-btn color="success" small @click="createProduct">Create new product</v-btn>
    </template>
    <template v-slot:page__content>
      <ProductInfo ref="product-info"/>
    </template>
  </AppPage>
</template>

<script>
import AppPage from '@/components/AppPage'
import ProductInfo from './ProductInfo'
import { mapActions } from 'vuex'
export default {
  components: {
    AppPage,
    ProductInfo
  },
  methods: {
    ...mapActions('ProductStore', [
      'addProduct'
    ]),
    async createProduct () {
      if (!this.$refs['product-info'].validate()) return
      try {
        await this.addProduct({
          payload: this.$refs['product-info'].payload
        })
        this.$snackbar.open({
          state: 'success',
          content: 'New product is created successfully'
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
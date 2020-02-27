<template>
  <AppPage title="Products">
      <template v-slot:page__search>
        <v-text-field
          id="search-product"
          v-model="search"
          label="Search"
          solo
          append-icon="search"
        ></v-text-field>
      </template>

      <template v-slot:page__actions>
        <div class="d-flex">
          <v-btn id="button-add-product" @click="$router.push('/add-product')" class="mr-2" color="success" small>
            <v-icon small>add</v-icon>
            <span>Add</span>
          </v-btn>
          <v-btn id="button-remove-product" @click="removeHandle" color="error" :disabled="selected.length === 0" small>
            <v-icon small>delete</v-icon>
            <span>Remove </span>
          </v-btn>
        </div>
      </template>

      <template v-slot:page__content>
        <v-data-table
          :search="search"
          v-model="selected"
          :headers="headers"
          :items="processedProducts"
          item-key="productId"
          show-select
          :options.sync="options"
          :loading="loading"
          class="elevation-0"
        >
          <template v-slot:item.productName="{item}">
            <router-link :to="`/edit-product/${item.productId}`">{{ item.productName }}</router-link>
          </template>
          <template v-slot:item.productTypeId="{item}">
            <span>{{ item.label }}</span>
          </template>
          <template v-slot:item.published="{ item }">
            <div>
              <v-icon v-if="item.status" color="green">done</v-icon>
              <v-icon v-else color="red">clear</v-icon>
            </div>
          </template>
        </v-data-table>
      </template>
  </AppPage>
</template>

<script>
import AppPage from '@/components/AppPage'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    AppPage
  },
  data () {
    return {
      search: '',
      selected: [],
      headers: [
        { text: 'Product name', value: 'productName' },
        { text: 'Price', value: 'price' },
        { text: 'Price Cost', value: 'priceCost' },
        { text: 'Product type', value: 'productTypeId' },
        { text: 'Unit', value: 'unitId' },
        { text: 'Status', value: 'status' }
      ],
      totalProducts: 0,
      loading: false,
      options: {}
    }
  },
  computed: {
    ...mapGetters('ProductStore', ['processedProducts'])
  },
  created () {
    this.fetchProducts()
  },
  methods: {
    ...mapActions('ProductStore', [
      'fetchProducts',
      'removeProduct',
      'addProduct'
    ]),
    removeHandle () {
      this.$dialog.open({
        title: "Do you want remove this items ?",
        state: 'error',
        content: `List item ids include: ${this.selected.map(item => item.productName).join(', ')}`,
        callback: async () => {
          console.log(this.selected)
          for (let i = 0; i < this.selected.length; i++) {
            console.log(this.selected[i].productId)
            await this.removeProduct({
              productId: this.selected[i].productId
            })
            await this.fetchProducts()
          }
        }
      })
    }
  }
}
</script>

<style>

</style>
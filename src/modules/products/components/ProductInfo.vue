<template>
  <v-card outlined>
    <v-card-text>
      <v-form ref="form" class="product-info" v-model="valid">
        <v-layout>
          <v-flex class="px-5" xs12 md6>
            <v-text-field :rules="[rules.required]" v-model="productName" label="Product name"></v-text-field>
            <v-text-field type="number" :rules="[rules.required]" v-model="price" label="Price"></v-text-field>
            <v-text-field type="number" :rules="[rules.required]" v-model="priceCost" label="Price cost"></v-text-field>
            <v-checkbox v-model="status" label="Status"></v-checkbox>
          </v-flex>
          <v-flex class="px-5" xs12 md6>
            <v-select label="Unit" v-model="unit" :items="listUnit" item-text="label" item-value="id"></v-select>
          </v-flex>
        </v-layout>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    initItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    initItem: {
      handler (val) {
        this.convertInitItem(val)
      },
      immediate: true
    }
  },
  data () {
    return {
      valid: false,
      productName: '',
      status: true,
      price: 0,
      priceCost: 0,
      unit: null,
      productType: { id: 1 , label: 'Simple', value: 'simple' },
      listProductType: [
        {
          id: 1,
          label: 'Simple',
          value: 'simple'
        },
        {
          id: 2,
          label: 'Grouped',
          value: 'grouped'
        }
      ],
      listUnit: [
        {
          id: 1,
          label: 'unit 1',
          value: 'unit 2'
        }
      ],
      rules: {
        required: value => !!value || 'Required.',
        min: value => numbers => Number(value) > Number(numbers) || `Min value is ${numbers}`
      }
    }
  },
  computed: {
    payload () {
      return {
        productName: this.productName,
        productTypeId: this.productType,
        status: this.status,
        price: this.price,
        priceCost: this.priceCost,
        unitId: this.unit
      }
    }
  },
  methods: {
    convertInitItem (item) {
      if (!item || Object.keys(item).length === 0) return 
      this.productName = item.productName;
      this.productType = item.productTypeId
      this.unit = item.unitId
      this.price = item.price
      this.priceCost = item.priceCost
      this.status = item.status
    },
    validate () {
      return this.$refs['form'].validate()
    }
  }
}
</script>

<style>

</style>
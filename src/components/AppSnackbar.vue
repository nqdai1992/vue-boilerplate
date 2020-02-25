<template>
  <v-snackbar top v-model="snackbar.isOpen">
    {{snackbar.options.content}}
    <v-btn
      :color="$snackbar.options.state"
      text
      @click="closeHandle"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data () {
    return {
      snackbar: this.$snackbar
    }
  },
  methods: {
    closeHandle () {
      this.$snackbar.close()
    }
  }
}
</script>

<style>

</style>
<template>
  <div class="app__page page">
    <div class="page__header mb-3">
      <div class="page__title title">
        {{title}}
      </div>
      <div class="page__actions">
        <slot name="page__actions" />
      </div>
    </div>

    <div class="page__search">
      <slot name="page__search" />
    </div>

    <div class="page__content">
      <slot name="page__content" />
    </div>
    
    <AppDialog />
    <AppSnackbar />
    <v-overlay :value="requestState === 'loading'">
      <div class="text-center">
        <v-progress-circular class="mb-4" indeterminate size="32"></v-progress-circular>
        <div>
          <span v-if="requestMethod === 'get'">Fetching data...</span>
          <span v-else-if="requestMethod === 'post'">Creating data...</span>
          <span v-else-if="requestMethod === 'put'">Updating data...</span>
          <span v-else>Removing data</span>
        </div>
        
      </div>
    </v-overlay>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'AppPage',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    computed: {
      ...mapState(['requestState', 'requestMethod'])
    }
  }
</script>

<style lang="scss">
.page__header {
  display: flex;
  justify-content: space-between;
}
.page__content {
  position: relative;
}
</style>
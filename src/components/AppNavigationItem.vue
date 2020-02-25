<template>
  <v-list-item
    v-if="item.type === 'item'"
    :to="item.path"
    link
  >
    <v-list-item-icon>
      <v-icon v-text="item.icon"></v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>
        {{ item.text }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>

  <v-list-group v-else :prepend-icon="item.icon">
     <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title>{{item.text}}</v-list-item-title>
        </v-list-item-content>
      </template>
      <AppNavigationItem v-for="child in item.children" :key="child.text" :item="child" />
  </v-list-group>
</template>

<script>
export default {
  name: 'AppNavigationItem',
  props: {
    type: {
      type: String,
      default: 'item'
    },
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style>

</style>
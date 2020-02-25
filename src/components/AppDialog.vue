<template>
  <v-dialog
    v-model="dialog.isOpen"
    max-width="290"
  >
    <v-card>
      <v-card-title class="headline">{{dialog.options.title}}</v-card-title>

      <v-card-text>
        {{dialog.options.content}}
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="green darken-1"
          text
          @click="passHandle"
        >
          {{passText}}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          text
          @click="closeHandle"
        >
          {{cancelText}}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      passText: 'Agree',
      cancelText: 'Disagree',
      dialog: this.$dialog
    }
  },
  methods: {
    passHandle () {
      if (this.dialog.options.callback && typeof this.dialog.options.callback === 'function') {
        this.dialog.options.callback()
      }
      this.dialog.close()
    },
    closeHandle () {
      this.dialog.close()
    }
  }
}
</script>
import Vue from 'vue'
import AppSnackbar from '@/components/AppSnackbar'

const module = {
  install (Vue) {
    Vue.component('AppSnackbar', AppSnackbar)
    
    Vue.prototype.$snackbar = {
      isOpen: false,
      options: {
        state: 'info',
        content: ''
      },
      open (options) {
        this.options = Object.assign(this.options, options)
        this.isOpen = true
      },
      close () {
        this.isOpen = false
        this.options = {
            state: 'info',
            content: ''
        };
      }
    }
  }
}

Vue.use(module)
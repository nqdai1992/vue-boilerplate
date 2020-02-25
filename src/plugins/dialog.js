import Vue from 'vue'
import AppDialog from '@/components/AppDialog'

const module = {
  install (Vue) {
    Vue.component('AppDialog', AppDialog)
    
    Vue.prototype.$dialog = {
      isOpen: false,
      options: {
        title: '',
        state: 'info',
        callback: null,
        content: ''
      },
      open (options) {
        this.options = Object.assign(this.options, options)
        this.isOpen = true
      },
      close () {
        this.isOpen = false
        this.options = {
            title: '',
            state: 'info',
            callback: null,
            content: ''
        };
      }
    }
  }
}

Vue.use(module)
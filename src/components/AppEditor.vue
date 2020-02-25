<template>
  <div ref="editor"></div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.core.css'

export default {
  data () {
    return {
      scopeId: '',
      editor: null,
      options: {
        theme: 'snow'
      }
    }
  },
  mounted () {
    this.editor = new Quill(this.$refs['editor'], this.options)
    
    this.editor.on('text-change', (eventName) => {
      if (eventName === 'text-change') {
        this.$emit('change', {
          content: this.content,
          text: this.text,
          html: this.html
        })
      }
    })
  },
  computed: {
    content () {
      return this.editor.getContents()
    },
    text () {
      return this.editor.getText().trim()
    },
    html () {
      return this.editor.scroll.domNode.innerHTML
    }
  },
 
}
</script>

<style lang="scss" scoped>
.ql-editor {
  font-size: 16px;
}
</style>
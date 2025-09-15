<template>
  <div class="editor-container">
    <div id="editor-container" />
  </div>
</template>

<script>
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs-plugin-ckeditor'
import $ from 'jquery'

export default {
  mounted() {
    this.initEditor()
    this.backImage()
  },
  methods: {
    backImage() {
      document.body.style.backgroundImage = 'URL(../../assets/img/bb.jpg)'
    },
    initEditor() {
      const editor = grapesjs.init({
        container: '#editor-container',
        components: '<div data-gjs-type="draggable">Hello, GrapesJS!</div>',
        layerManager: {
          // appendTo: '#editor-layers',
          showWrapper: false,
          scrollLayers: true
        },
        panels: { defaults: [] }, // 取消按钮显示
        canvas: {
          styles: [
            // 'background-image': 'url(https://th.bing.com/th/id/OIP.qGPRj7KzeANagol1kohUvwHaEP?pid=ImgDet&rs=1)', // 设置背景图的URL
            // 'background-repeat': 'no-repeat', // 背景图不重复
            // 'background-position': 'center center' // 背景图居中对齐
            { 'background-image': 'url(https://th.bing.com/th/id/OIP.qGPRj7KzeANagol1kohUvwHaEP?pid=ImgDet&rs=1)' }, // 设置背景图的URL
            { 'background-repeat': 'no-repeat' }, // 背景图不重复
            { 'background-position': 'center center' } // 背景图居中对齐
          ]
        }
      })
      console.log(editor.getHtml(), 'editor')
      var draggableComponent = `
        <div data-gjs-type="draggable" style="width: 200px; height: 100px; background-color: #f2f2f2;">
          <!-- 这里放置你的内容 -->
          1285
        </div>
      `

      editor.addComponents(draggableComponent)
      editor.DomComponents.addType('draggable', {
        model: {
          defaults: {
            draggable: true,
            draggableOptions: {}
          }
        },
        view: {
          events: {
            'mousedown': 'startDrag'
          },
          startDrag: function(e) {
            e.preventDefault()
            e.stopPropagation()

            var $body = $('body')

            var el = this.el

            var startX = e.clientX - el.getBoundingClientRect().left
            var startY = e.clientY - el.getBoundingClientRect().top

            el.style.position = 'absolute'
            el.style.zIndex = '9999'

            el.style.left = el.getBoundingClientRect().left + 'px'
            el.style.top = el.getBoundingClientRect().top + 'px'

            // 隐藏边框和按钮
            el.style.border = 'none'
            var buttons = el.querySelectorAll('.gjs-trt-traits')
            buttons.forEach(function(btn) {
              btn.style.display = 'none'
            })

            $body.on('mousemove', function(e) {
              var newX = e.clientX - startX
              var newY = e.clientY - startY

              el.style.left = newX + 'px'
              el.style.top = newY + 'px'
            })

            $body.on('mouseup', function() {
              $body.off('mousemove')
              $body.off('mouseup')
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.editor-container {
  width: 100% !important;
  height: 100% !important;
}

#editor-container {
  width: 100% !important;
  height: 100% !important;
}
</style>

<style>
.gjs-cv-canvas {
  width: 100%;
  height: 100%;
  top: 0;
}
/* 隐藏元素名称 */
.gjs-block-label {
  display: none;
}

/* 隐藏操作按钮 */
.gjs-trt-traits {
  display: none;
}
</style>

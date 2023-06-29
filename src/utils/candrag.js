export default {
  install(Vue) {
    Vue.directive('candrag', {
      inserted(el, binding, vnode) {
        el.onmousedown = function(ev) {
          const disX = ev.clientX - el.offsetLeft
          const disY = ev.clientY - el.offsetTop
          const parentWidth = el.parentElement.offsetWidth
          const parentHeight = el.parentElement.offsetHeight

          document.onmousemove = function(ev) {
            if (ev.stopPropagation) {
              ev.stopPropagation()
            }
            if (ev.preventDefault) {
              ev.preventDefault()
            }

            let left = ev.clientX - disX
            let top = ev.clientY - disY

            // 限制左侧边界
            if (left < 0) {
              left = 0
            }
            // 限制上方边界
            if (top < 0) {
              top = 0
            }
            // 限制右侧边界
            if (left > parentWidth - el.offsetWidth) {
              left = parentWidth - el.offsetWidth
            }
            // 限制下方边界
            if (top > parentHeight - el.offsetHeight) {
              top = parentHeight - el.offsetHeight
            }

            el.style.left = left + 'px'
            el.style.top = top + 'px'
          }

          document.onmouseup = function() {
            document.onmousemove = null
            document.onmouseup = null
          }
        }
      }
    })
  }
}

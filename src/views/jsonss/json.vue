<template>
  <div v-html="htmlContent" />
</template>

<script>
import jsonData from '../../utils/NewVisualization.json'
export default {
  computed: {
    htmlContent() {
      // 将JSON转换为字符串
      const jsonString = JSON.stringify(jsonData)

      // 将字符串中的特殊字符进行转义
      const escapedString = jsonString
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')

      // 将转义后的字符串作为HTML内容进行展示
      return escapedString
    }
  }
}
</script>

<style scoped>

</style>

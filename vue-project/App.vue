<script lang="ts" setup>
import { ref } from 'vue'

const name = ref<string>('李浩浩')
</script>

<template>
  <div>我的姓名是：{{ name }}</div>
</template>

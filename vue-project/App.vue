<script lang="ts" setup>
import { ref } from 'vue'
import $font from '@/assets/css/font.module.css'

const name = ref<string>('李浩浩')
</script>

<template>
  <div :class="$font.font">我的姓名是：{{ name }}</div>
</template>

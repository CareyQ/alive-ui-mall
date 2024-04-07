<script setup lang="ts">
import type { BtnNavItem } from '@/types/home'

defineProps<{
  btnNav: BtnNavItem[]
}>()
</script>

<template>
  <!-- btnNav 按钮导航 -->
  <view class="btn-nav">
    <view class="btn-nav-item" v-for="item in btnNav" :key="item.id">
      <view :class="item.icon"></view>
      <view>{{ item.text }}</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.btn-nav {
  display: flex;
}
</style>

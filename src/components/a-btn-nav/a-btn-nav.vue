<script setup lang="ts">
import type { BtnNavItem } from '@/types/home'

defineProps<{
  btnNav: BtnNavItem[]
}>()
</script>

<template>
  <!-- btnNav 按钮导航 -->
  <view class="btn-nav">
    <navigator class="btn-nav-item" v-for="item in btnNav" :key="item.id">
      <view class="icon" :class="item.icon"></view>
      <view class="text">{{ item.text }}</view>
    </navigator>
  </view>
</template>

<style lang="scss" scoped>
.btn-nav {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 60rpx);
  padding: 52rpx 0 60rpx;
  margin: 0 auto;
  border-bottom: 1px solid #efefef;
}

.btn-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  font-size: 70rpx;
  font-weight: 100;
  opacity: 0.8;
}

.text {
  margin-top: 10rpx;
  font-size: 24rpx;
}
</style>

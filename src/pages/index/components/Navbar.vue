<script setup lang="ts">
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <!-- logo -->
    <view class="logo">
      <text class="logo-text">ALIVE</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  color: #fff;
}

.logo {
  padding-left: 20rpx;
}
</style>

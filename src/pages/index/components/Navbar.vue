<script setup lang="ts">
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets!.top + 10 + 'px' }">
    <!-- logo -->
    <view class="logo">
      <image class="logo-img" src="@/static/logo.png" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  color: #fff;
}

.logo {
  padding-left: 20rpx;
}

.logo-img {
  width: 250rpx;
  height: 50rpx;
}
</style>

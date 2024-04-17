<script setup lang="ts">
const { safeAreaInsets } = uni.getSystemInfoSync()
const categories = ref([
  {
    value: '1',
    label: '车载3C'
  },
  {
    value: '2',
    label: '家居生活'
  },
  {
    value: '3',
    label: '户外野趣'
  },
  {
    value: '4',
    label: '服配潮颜'
  },
  {
    value: '5',
    label: '生活卡券'
  }
])
</script>

<template>
  <view class="nav" :style="{ paddingTop: safeAreaInsets!.top + 10 + 'px' }">
    <!-- logo -->
    <view class="logo">
      <text>ALIVE</text>
      <text>商城</text>
    </view>
    <a-category-list :categories="categories" />
  </view>
</template>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  color: #fff;
}

.logo {
  padding-left: 30rpx;
}

.logo-img {
  width: 250rpx;
  height: 50rpx;
}
</style>

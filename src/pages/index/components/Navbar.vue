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
  <view class="navbar" :style="{ paddingTop: safeAreaInsets!.top + 10 + 'px' }">
    <!-- logo -->
    <view class="logo">
      <image class="logo-img" src="@/static/logo.png" />
    </view>

    <a-category-list :categories="categories" />
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

<script setup lang="ts">
import * as HomeData from '@/mock/home'

const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="page">
    <a-home-nav :search-list="HomeData.searchList" />
    <view class="home-content">
      <a-banner :banner="HomeData.banner" />
    </view>

    <!-- <a-btn-nav :btn-nav="btnNav" /> -->
    121
  </view>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
}
</style>

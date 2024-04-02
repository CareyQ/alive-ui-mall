<script setup lang="ts">
const { safeAreaInsets } = uni.getSystemInfoSync()
console.log(safeAreaInsets);

</script>

<template>
  <view class="navbar" :style="{paddingTop: safeAreaInsets?.top + 'px'}">
    <!-- logo -->
    <view class="logo">
      <text class="logo-text">ALIVE</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>
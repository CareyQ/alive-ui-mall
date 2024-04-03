<script setup lang="ts">
import Navbar from './components/Navbar.vue'

const { safeAreaInsets } = uni.getSystemInfoSync()

const banner = ref([
  {
    hrefUrl: '',
    id: '1',
    imgUrl: '/static/banner/01.jpg',
    type: 1
  },
  {
    hrefUrl: '',
    id: '2',
    imgUrl: '/static/banner/02.jpg',
    type: 1
  },
  {
    hrefUrl: '',
    id: '3',
    imgUrl: '/static/banner/03.jpg',
    type: 1
  },
  {
    hrefUrl: '',
    id: '4',
    imgUrl: '/static/banner/04.jpg',
    type: 1
  },
  {
    hrefUrl: '',
    id: '5',
    imgUrl: '/static/banner/05.jpg',
    type: 1
  }
])
</script>

<template>
  <view class="page">
    <Navbar />

    <!-- banner 轮播图 -->
    <a-banner :banner="banner" />

    12
  </view>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
}
</style>

<style lang="scss">
.page {
  background-color: #fafafa;
}
</style>

<script setup lang="ts">
const { safeAreaInsets } = uni.getSystemInfoSync()

defineProps<{
  searchList: string[]
}>()
</script>

<template>
  <view class="home-nav" :style="{ paddingTop: safeAreaInsets!.top + 'px' }">
    <view class="home-nav-logo">
      <text class="logo-main">ALIVE</text>
      <text class="logo-part">商城</text>
    </view>

    <view class="home-nav-search">
      <view class="search-wrap">
        <view class="icon-search"></view>
        <swiper class="swiper" :interval="3000" circular autoplay vertical>
          <swiper-item v-for="(item, index) in searchList" :key="index" style="display: flex; align-items: center">
            <text>{{ item }}</text>
          </swiper-item>
        </swiper>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.home-nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9;
}

.home-nav-logo {
  display: flex;
  align-items: flex-start;
  padding: 16px 20px;
  color: #fff;
}

.logo-main {
  margin-right: 6px;
  font-weight: bold;
}

.logo-part {
  font-size: 15px;
  font-weight: 100;
}

.home-nav-search {
  padding: 6px 20px;
}

.search-wrap {
  display: flex;
  flex-direction: row;
  height: 35px;
  padding: 0 13px;
  background-color: #19191917;
  border: 1px solid hsl(0deg 0% 100% / 50%);
  border-radius: 17px;
  align-items: center;
}

.icon-search {
  color: #fff;
}

.swiper {
  position: absolute;
  width: 100%;
  height: 25px;

  text {
    height: 35px;
    padding-left: 35px;
    font-size: 15px;
    line-height: 35px;
    color: #ffffffb3;
  }
}
</style>

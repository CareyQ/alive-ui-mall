<script setup lang="ts">
import type { Entry } from '@/types/home'

defineProps<{
  categories: Entry[]
}>()
</script>

<template>
  <view class="categories-wrap">
    <view class="categories">
      <scroll-view scroll-x class="categories-scroll" enable-flex>
        <view class="category">
          <text>推荐</text>
        </view>
        <view class="category" v-for="item in categories" :key="item.value">
          <text>{{ item.label }}</text>
        </view>
      </scroll-view>
    </view>

    <view class="categories-btn">
      <text class="icon-hamburger"></text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.categories-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20rpx;
}

.categories {
  width: 90%;
  overflow: hidden;
}

.categories-scroll {
  white-space: nowrap;
}

.category {
  display: inline-block;
  width: fit-content;
  margin-right: 40rpx;
  margin-left: 30rpx;
  font-size: 30rpx;
}

.categories-btn {
  margin-right: 30rpx;
  font-size: 47rpx;
}
</style>

<script setup lang="ts">
import type { BannerItem } from '@/types/home'

const { screenWidth } = uni.getSystemInfoSync()
const unit = ref(screenWidth! / 5)

defineProps<{
  banner: BannerItem[]
}>()

const instance = getCurrentInstance()
const activeIndex = ref(0)
const bannerHeight = ref('430px')

const onChange: UniHelper.SwiperOnChange = (event) => {
  activeIndex.value = event.detail.current
  setImage()
}

const setImage = () => {
  const query = uni.createSelectorQuery().in(instance)
  query
    .select('#img' + activeIndex.value)
    .boundingClientRect((data) => {
      const detail = data as UniApp.NodeInfo
      bannerHeight.value = (detail.height || 430) + 'px'
    })
    .exec()
}
</script>

<template>
  <!-- banner 轮播图 -->
  <view class="banner" :style="{ height: bannerHeight }">
    <swiper class="swiper" @change="onChange" circular :autoplay="false">
      <swiper-item v-for="(item, index) in banner" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="widthFix" class="image" :src="item.picUrl" :id="'img' + index" @load="setImage" />
        </navigator>
      </swiper-item>
    </swiper>

    <view class="dot-wrap">
      <text
        class="dot"
        v-for="(item, index) in banner"
        :key="item.id"
        :style="{ width: unit + 'px' }"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.dot-wrap {
  display: flex;
}

.dot {
  height: 6rpx;
}

.dot.active {
  background-color: #f8870c;
}

.banner-meta {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20rpx 30rpx;
  color: #fff;
  backdrop-filter: blur(6px);
  background-color: rgba($color: #000, $alpha: 15%);
}

.meta-title {
  margin-bottom: 20rpx;
  font-size: 30rpx;
  letter-spacing: 1px;
}

.meta-subtitle {
  font-size: 22rpx;
  opacity: 0.7;
}
</style>

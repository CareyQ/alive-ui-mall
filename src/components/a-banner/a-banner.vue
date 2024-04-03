<script setup lang="ts">
import type { BannerItem } from '@/types/home'

const { screenWidth } = uni.getSystemInfoSync()
const unit = ref(screenWidth! / 5)

defineProps<{
  banner: BannerItem[]
}>()

const activeIndex = ref(0)

const onChange: UniHelper.SwiperOnChange = (event) => {
  activeIndex.value = event.detail.current
}
</script>

<template>
  <!-- banner 轮播图 -->
  <view class="banner">
    <swiper class="swiper" @change="onChange" circular autoplay>
      <swiper-item v-for="item in banner" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="widthFix" class="image" :src="item.imgUrl" />
        </navigator>
      </swiper-item>
    </swiper>

    <view class="dto-wrap">
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
.banner {
  height: 60%;
}

.dto-wrap {
  display: flex;
}

.dot {
  height: 6rpx;
}

.dot.active {
  background-color: #f8870c;
}
</style>

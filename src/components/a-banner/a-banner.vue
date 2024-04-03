<script setup lang="ts">
import type { BannerItem } from '@/types/home'

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
    <swiper class="swiper" @change="onChange" circular :autoplay="false">
      <swiper-item v-for="item in banner" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl" />
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view>
      <text
        v-for="(item, index) in banner"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.banner {
  height: 50%;
}
</style>

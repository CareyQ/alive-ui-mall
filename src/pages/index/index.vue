<script setup lang="ts">
import Navbar from './components/Navbar.vue'

const { safeAreaInsets } = uni.getSystemInfoSync()

const banner = ref([
  {
    hrefUrl: '',
    id: '1',
    imgUrl: '/static/banner/01.jpg',
    type: 1,
    meta: {
      title: '吉利中国星X天宫钥匙套包',
      subTitle: '匠心之作 经久耐用'
    }
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

const btnNav = ref([
  {
    id: '1',
    icon: 'icon-goods',
    link: '',
    text: '每周新品'
  },
  {
    id: '2',
    icon: 'icon-zan',
    link: '',
    text: '热销好物'
  },
  {
    id: '3',
    icon: 'icon-coupon',
    link: '',
    text: '限时优惠'
  },
  {
    id: '4',
    icon: 'icon-date',
    link: '',
    text: '每日签到'
  }
])
</script>

<template>
  <view class="page">
    <Navbar />
    <a-banner :banner="banner" />
    <a-btn-nav :btn-nav="btnNav" />
    121
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

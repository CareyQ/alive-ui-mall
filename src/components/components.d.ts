import aBanner from './a-banner/a-banner.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    aBanner: typeof aBanner
  }
}

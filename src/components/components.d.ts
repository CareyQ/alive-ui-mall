import aHomeNav from './a-home-nav/a-home-nav.vue'
import aBanner from './a-banner/a-banner.vue'
import aCategoryList from './a-category-list/a-category-list.vue'
import aBtnNav from './a-btn-nav/a-btn-nav.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    aHomeNav: typeof aHomeNav
    aBanner: typeof aBanner
    aBtnNav: typeof aBtnNav
    aCategoryList: typeof aCategoryList
  }
}

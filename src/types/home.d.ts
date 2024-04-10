/** value-label */
export type Entry = {
  value: string
  label: string
}

/** 首页-广告区域数据类型 */
export type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
  /** 元数据 */
  meta?: {
    title: string
    subtitle: string
  }
}

/** 首页-按钮导航 */
export type BtnNavItem = {
  id: string
  icon: string
  link: string
  text: string
}

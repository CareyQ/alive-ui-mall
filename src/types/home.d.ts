/** value-label */
export type Entry = {
  value: string
  label: string
}

/** 首页-广告区域数据类型 */
export type BannerItem = {
  /** id */
  id: string
  /** 图片链接 */
  picUrl: string
  /** 跳转类型 */
  type: number
  /** 标题 */
  title: string
  /** 副标题 */
  subtitle: string
}

/** 首页-按钮导航 */
export type BtnNavItem = {
  id: string
  picUrl: string
  link: string
  text: string
}

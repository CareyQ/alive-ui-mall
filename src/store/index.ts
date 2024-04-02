import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const store = createPinia()
// 持久化存储
store.use(persist)

export default store

export * from './modules/member'

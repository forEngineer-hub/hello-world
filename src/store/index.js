import { createStore } from 'vuex'
import category from './home/category'
import hotGoods from './home/hotGoods'
import swiper from './home/swiper'
import detail from './detail/detail'
export default createStore({
  modules: {
    category,
    hotGoods,
    swiper,
    detail
  },
})
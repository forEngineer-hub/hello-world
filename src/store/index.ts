import { InjectionKey } from 'vue'
import { createStore, Store ,useStore as baseUseStore} from 'vuex'

import category from './home/category'
import hotGoods from './home/hotGoods'
import swiper from './home/swiper'
import detail from './detail/detail'

type State = {};

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {
    category,
    hotGoods,
    swiper,
    detail
  },
})

export const useStore = () => {
  return baseUseStore(key);
}
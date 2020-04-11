import Vue from 'vue'
import Vuex from 'vuex'
import CraftingTableStore from './CraftingTable'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        CraftingTableStore
    },
    strict: debug,
    plugins: []
})

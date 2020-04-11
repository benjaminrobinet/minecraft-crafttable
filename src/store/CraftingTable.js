import items from '../data/items.json';

const CraftingTableStore = {
    namespaced: true,
    state: {
        items: [],
    },
    mutations: {
        add(state, {item, position}) {
            state.items.splice(position, 1, item)
        },
        setSize(state, {size}) {
            for(let i = 0; i < size; i++){
                state.items.push(-1);
            }
        }
    },
    getters: {
        items: (state) => {
            return state;
        },
        itemAtPos: (state) => ({x, y}) => {
            return items.items.find(item => item.id === state.items[Math.max(0, x + 1) * Math.max(0, y + 1) - 1])
        }
    }

}

export default CraftingTableStore;

<template>
    <div class="crafting-table">
        <div class="crafting">
            <div v-for="x in size" class="row">
                <div class="case" ref="cases" v-for="y in size">
                    <Item v-if="$store.getters['CraftingTableStore/itemAtPos']({x,y})"
                          :item="$store.getters['CraftingTableStore/itemAtPos']({x,y})"/>
                </div>
            </div>
        </div>
        <div class="crafted">
            <div class="case"></div>
        </div>
    </div>
</template>

<script>
    import Item from "@/components/Item";
    export default {
        name: "CraftingTable",
        components: {Item},
        props: {
            size: {
                type: Number,
                default: 3
            }
        },
        mounted() {
            this.$store.commit('CraftingTableStore/setSize', {size: Math.pow(this.size, 2)})
            this.$refs.cases.forEach(el => {
                el.addEventListener('startdrag', (e) => {
                    e.preventDefault();
                })
                el.addEventListener('dragover', (e) => {
                    e.preventDefault();
                })
                el.addEventListener('drop', (e) => {
                    let absolute_pos = this.$refs.cases.indexOf(e.toElement);
                    let item_id = e.dataTransfer.getData('item_id');

                    this.$store.commit('CraftingTableStore/add', {
                        item: parseInt(item_id), position: absolute_pos
                    })

                    console.log(this.$store.state.CraftingTableStore.items);
                })
            })
        }
    }
</script>

<style scoped lang="scss">
    .crafting-table {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background-color: lightgrey;
        display: inline-flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        padding: 10px;
        border: 1px solid grey;

        .case {
            display: inline-block;
            width: 50px;
            height: 50px;
            background-color: grey;
            border: 1px solid black;
            margin: 5px;
            overflow: hidden;
        }

        .crafting {
            display: inline-block;
        }

        .crafted {
            margin-left: 30px;

            .result {

            }
        }
    }
</style>

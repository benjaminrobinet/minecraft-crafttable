<template>
    <div class="scene">
        <Backpack ref="backpack" />
        <CraftingTable ref="craftingTable" :size="3"/>
    </div>
</template>

<script>
    import Backpack from "@/components/Backpack";
    import CraftingTable from "@/components/CraftingTable";
    export default {
        name: "Scene",
        components: {CraftingTable, Backpack},
        data: () => {
            return {}
        },
        mounted(){
            this.$refs.backpack.$refs.items.forEach((c) => {
                c.$el.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('item_id', c.item.id);
                })
                c.$el.addEventListener('dragover', (e) => {
                    // console.log("dragover", e);
                })
                c.$el.addEventListener('drop', (e) => {
                    // console.log("drop", e);
                })
            })
        }
    }
</script>

<style scoped lang="scss">
    .scene{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background-image: url("../assets/background.png");
        background-size: cover;
        background-position: center;
    }
</style>

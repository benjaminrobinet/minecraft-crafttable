<template>
    <div class="backpack">
        <div class="items">
            <Item v-for="item in items" ref="items" :item="item" />
        </div>
    </div>
</template>

<script>
    import items from '@/data/items.json';
    import Item from "@/components/Item";
    export default {
        name: "Backpack",
        components: {Item},
        data() {
            return {
                items: items.items
            }
        },
        mounted() {}
    }
</script>

<style scoped lang="scss">
    .backpack{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: grey;
        padding: 10px;
    }
</style>

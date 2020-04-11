<template>
    <div class="item" draggable="true">
        <span>{{ item.infos }}</span>
    </div>
</template>

<script>
    export default {
        name: "Item",
        props: {
            item: {
                type: Object
            }
        },
        data: () => {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    .item {
        display: inline-block;
        position: relative;
        width: 50px;
        height: 50px;
        font-size: 32px;
        line-height: 32px;
        color: black;
        text-align: center;

        &::before {
            content: '';
            height: 100%;
            display: inline-block;
            vertical-align: middle;
        }

        > * {
            display: inline-block;
            vertical-align: middle;
        }
    }
</style>

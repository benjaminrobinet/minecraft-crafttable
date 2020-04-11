<template>
    <div id="app">
        <Scene/>
    </div>
</template>

<script>
    import Scene from "@/components/Scene";

    export default {
        name: 'App',
        components: {Scene}
    }
</script>

<style lang="scss">
    body {
        overflow: hidden;
        margin: 0;
    }

    #app {

    }
</style>

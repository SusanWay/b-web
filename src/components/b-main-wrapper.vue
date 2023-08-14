<template>
    <div class="b-main-wrapper">
        <bCatalog>

        </bCatalog>
    </div>
</template>

<script>
    import bCatalog from './b-catalog.vue';

    export default{
        name: 'b-main-wrapper',
        props: {},
        data() {
            return{}
        },
        computed: {},
        methods: {},
        watch: {},
        components: {
            bCatalog
        }

    }
</script>

<style>
    .b-main-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>
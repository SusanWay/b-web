<template>
    <div class="b-main-wrapper">
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<script>

    export default{
        name: 'b-main-wrapper',
        props: {},
        data() {
            return{}
        }
    }
</script>

<style>
    .b-main-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1280px;
        margin: 0 auto;
    }

    .b-main-wrapper .container{
        width: 1280px;
    }
</style>
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
    data() {
        return{}
    }
}
</script>

<style lang="scss">
    .b-main-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1280px;
        margin: 0 auto;
    }

    .b-main-wrapper .container{
        width: $b-container-width;
    }
</style>
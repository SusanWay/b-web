<template>
    <div class="b-inventory">
        <bInventoryItem
        v-for="item in this.$store.state.current_inventory.items"
        :key="item.id_steam"
        v-bind:item="item"
        />
    </div>
</template>

<script>
    import bInventoryItem from './b-inventory-item.vue';
    export default{
        name: 'b-inventory',
        props:{},
        data(){
            return {}
        },
        components:{
            bInventoryItem
        }
    }
</script>

<style lang="scss">

    .b-inventory{
        height: 340px;
        padding: 20px;
    }
</style>
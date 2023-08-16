<template>
    <div class="b-inventory">
       {{ this.$store.state.current_account.id }}
       {{ this.$store.state.current_inventory.id }}
    </div>
</template>

<script>
    export default{
        name: 'b-inventory',
        props:{},
        data(){
            return {}
        }
    }
</script>

<style lang="scss">

    .b-inventory{
        background-color: $main-bg-inventory;
        height: 340px;
        padding: 20px;
    }
</style>
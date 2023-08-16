<template>
    <div class="b-account-inventory">
        <h2>
            Инвентарь
        </h2>
        <div>
            <bInventory/>
        </div>
    </div>
</template>

<script>
import bInventory from '../inventory/b-inventory.vue';

export default{
    name: 'b-account-inventory',
    props:{
        account_info: {
            defoult(){
                return {}
            }
        }
    },
    data(){
        return {
            trades: 0
        }
    },
    components: {
        bInventory
    }
}
</script>

<style lang="scss">

    .b-account-inventory{
        width: 100%;
        height: 450px;
        padding: $b-account-case-padding;
        border-radius: $b-account-case-border-radius;
        background-color: $main-bg-light;
    }

</style>
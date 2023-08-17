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
        return {}
    },
    components: {
        bInventory
    }
}
</script>

<style lang="scss">
    .b-account-inventory{
        height: 450px;
    }
</style>
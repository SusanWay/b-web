<template>
    <div class="b-account">
        <div class="case">
            <bAccountProfile
            v-bind:account_profile="{
                name: this.$store.state.current_account.name,
                registration_date: this.$store.state.current_account.registration_date
            }"
            />
            <bAccountInfo
            v-bind:account_info="{
                email: this.$store.state.current_account.email,
                phone: this.$store.state.current_account.phone,
                steam_id: this.$store.state.current_account.steam_id
            }"
            />
        </div>
        <div class="case">
            <bAccountInventory/>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import bAccountProfile from './b-account-profile.vue'
import bAccountInfo from './b-account-info.vue'
import bAccountInventory from './b-account-inventory.vue'

export default {
    name: 'b-account',
    props: {},
    data() {
        return {}
    },
    computed: {},
    methods: {
        ...mapActions([
            'GET_CURRENT_ACCOUNTS_FROM_API',
            'GET_CURRENT_INVENTORY_FROM_API'
        ])
    },
    mounted() {
        this.GET_CURRENT_ACCOUNTS_FROM_API(this.$route.params.id)
        this.GET_CURRENT_INVENTORY_FROM_API(this.$route.params.id_inventory)

    },
    components: {
        bAccountProfile,
        bAccountInfo,
        bAccountInventory
    }
}
</script>

<style lang="scss">

</style>
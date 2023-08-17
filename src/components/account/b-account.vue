<template>
    <div class="b-account">
        <div class="case">
            <bAccountProfile
            v-bind:accountProfile="{
                name: this.$store.state.currentAccount.name,
                registrationDate: this.$store.state.currentAccount.registration_date
            }"
            />
            <bAccountInfo
            v-bind:accountInfo="{
                email: this.$store.state.currentAccount.email,
                phone: this.$store.state.currentAccount.phone,
                steamId: this.$store.state.currentAccount.steam_id
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
    data() {
        return {}
    },
    methods: {
        ...mapActions([
            'GET_CURRENT_ACCOUNT_FROM_API',
            'GET_CURRENT_INVENTORY_FROM_API'
        ]),
        async fetchData() {
            try {
                await this.GET_CURRENT_ACCOUNT_FROM_API(this.$route.params.id);
                await this.GET_CURRENT_INVENTORY_FROM_API(this.$route.params.id_inventory);
            } 
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    },
    mounted() {
        this.fetchData()
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
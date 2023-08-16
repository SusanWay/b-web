<template>
    <div class="b-account">
        <bAccountProfile
        :key="this.$store.state.current_account.id"
        v-bind:account_profile_data="{
            name: this.$store.state.current_account.name,
            registration_date: this.$store.state.current_account.registration_date
        }"
        />
        <bAccountInfo
        :key="this.$store.state.current_account.id"
        v-bind:account_profile_info="{
            email: this.$store.state.current_account.email,
            phone: this.$store.state.current_account.phone,
            steam_id: this.$store.state.current_account.steam_id
        }"
        />
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import bAccountProfile from './b-account-profile.vue'
import bAccountInfo from './b-account-info.vue'

export default {
    name: 'b-account',
    props: {},
    data() {
        return {}
    },
    computed: {},
    methods: {
        ...mapActions([
            'GET_CURRENT_ACCOUNTS_FROM_API'
        ])
    },
    mounted() {
        this.GET_CURRENT_ACCOUNTS_FROM_API(this.$route.params.id)
    },
    components: {
        bAccountProfile,
        bAccountInfo
    }
}
</script>

<style lang="scss">
    .b-account{
        display: flex;
        align-items: left;
        margin-top: 60px;
        padding: 30px;
        border-radius: 15px;
    }

</style>
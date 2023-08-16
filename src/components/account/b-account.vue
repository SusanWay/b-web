<template>
    <div class="b-account">
        <bAccountProfile
        :key="this.$store.state.current_account.id"
        v-bind:acc_data="this.$store.state.current_account"
        />
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import bAccountProfile from './b-account-profile.vue'

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
        bAccountProfile
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
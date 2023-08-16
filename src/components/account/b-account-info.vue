<template>
    <div class="b-account-info">
        <p>
            Профиль
        </p>
        <p class="b-account-li">
            E-mail: {{ account_profile_info.email }}
        </p>
        <p class="b-account-li">
            Телефон: {{ account_profile_info.phone }}
        </p>
        <p class="b-account-li">
            Steam id: {{ account_profile_info.steam_id }}
        </p>
    </div>
</template>

<script>


export default{
    name: 'b-account-info',
    props:{
        account_profile_info: {
            defoult(){
                return {}
            }
        }
    },
    data(){
        return {
            trades: 0
        }
    }
}
</script>

<style lang="scss">

    .b-account-info{
        width: $b-account-case-width;
        padding: $b-account-case-padding;
        border-radius: $b-account-case-border-radius;
        background-color: $main-bg-light;
        margin: $b-account-case-margin;
    }

    .b-account-li{
        padding-bottom: 10px;
        border-bottom: $b-li-border-bottom;
    }
</style>
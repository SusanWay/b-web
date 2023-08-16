<template>
    <div class="b-account-profile">
        <h2>
            Профиль
        </h2>
        <p class="b-account-li">
            Логин: {{ account_profile.name }}
        </p>
        <p class="b-account-li">
            Дата регистарции: {{ account_profile.registration_date }}
        </p>
        <p class="b-account-li">
            Обменов: {{ trades }}
        </p>
    </div>
</template>

<script>


export default{
    name: 'b-account-profile',
    props:{
        account_profile: {
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

    .b-account-profile{
        width: $b-account-case-width;
        padding: $b-account-case-padding;
        border-radius: $b-account-case-border-radius;
        background-color: $main-bg-light;
    }

    .b-account-li{
        padding-bottom: 10px;
        border-bottom: $b-li-border-bottom;
    }
</style>
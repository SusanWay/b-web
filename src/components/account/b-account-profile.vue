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

</style>
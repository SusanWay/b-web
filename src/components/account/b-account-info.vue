<template>
    <div class="b-account-info">
        <h2>
            Контактная информация
        </h2>
        <p class="b-account-li">
            E-mail: {{ account_info.email }}
        </p>
        <p class="b-account-li">
            Телефон: {{ account_info.phone }}
        </p>
        <p class="b-account-li">
            Steam id: {{ account_info.steam_id }}
        </p>
    </div>
</template>

<script>


export default{
    name: 'b-account-info',
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
    }
}
</script>

<style lang="scss">

</style>
<template>
    <div class="b-account-info">
        <h2>
            Контактная информация
        </h2>
        <p class="b-account-li">
            E-mail: {{ accountInfo.email }}
        </p>
        <p class="b-account-li">
            Телефон: {{ accountInfo.phone }}
        </p>
        <p class="b-account-li">
            Steam id: {{ accountInfo.steamId }}
        </p>
    </div>
</template>

<script>
export default{
    name: 'b-account-info',
    props:{
        accountInfo: {
            defoult(){
                return {}
            }
        }
    },
    data(){
        return {}
    }
}
</script>

<style lang="scss">
</style>
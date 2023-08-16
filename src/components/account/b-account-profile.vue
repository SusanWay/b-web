<template>
    <div class="b-account-profile">
        <p>
            Профиль
        </p>
        <p>
            Логин: {{ acc_data.name }}
        </p>
    </div>
</template>

<script>


export default{
    name: 'b-account-profile',
    props:{
        acc_data: {
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

    .b-account-profile{
        width: 580px;
        padding: 15px;
        border-radius: 5px;
        background-color: $main-bg-light;
    }

</style>
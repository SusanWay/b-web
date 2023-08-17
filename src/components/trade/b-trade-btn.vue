<template>
    <div class="b-trade-btn">
        <a class="b-trade-item_element_btn" href="#home"><p>Обменяться</p></a>
        <p>Вы получите:</p>
        <p>Предметов: {{ items }}</p>
        <p>На сумму: {{ total }} P</p>
    </div>
</template>

<script>
export default {
    name: 'b-trade-btn',
    props: {},
    data() {
        return {
            items: 0,
            total: 0
        }
    },
    computed: {},
    methods: {},
    components: {
    }
}
</script>

<style lang="scss">
    .b-trade-btn{
        width: 210px;
        height: 180px;
        background-color: $main-bg-light;
        padding: 15px;
        border-radius: $b-account-case-border-radius;
    }

    .b-trade-item_element_btn p{
        text-decoration: none;
        text-align: center;
        border: $b-li-border-bottom;
        border-radius: 4px;
        background-color: $main-bg-hover;
        padding: 5px;
        height: 30px;
    }
</style>
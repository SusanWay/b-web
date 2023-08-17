<template>
    <div class="b-trade-btn">
        <div class="b-trade-btn-box">
            <a class="b-trade-item_element_btn disabled" href="#home"><p>Обменяться</p></a>
            <p>{{ total }}  ₽</p>
            <p>предметов: {{ items }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'b-trade-btn',
    data() {
        return {
            items: 0,
            total: 0
        }
    }
}
</script>

<style lang="scss">
    .b-trade-btn{
        width: 210px;
        height: 180px;
        padding: 15px;
        background-color: $main-bg-light;
    }

    .disabled p{
        background-color: $main-bg-hover;
        border: 4px ;
    }

    .b-trade-item_element_btn p{
        border-radius: 4px;
        padding: 5px;
        height: 30px;
    }

    .b-trade-btn-box{
        background-color: $main-bg-inventory;
        text-align: center;
        border-radius: 15px;
        padding-bottom: 5px;
    }
</style>
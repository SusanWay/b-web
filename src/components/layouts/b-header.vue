<template>
    <div class="b-header">
        <div class="wrap-logo">
        <a href="#logo" class="logo">Логотип сайта</a>
        </div>
        <nav>
            <router-link :to="'/trade'">
            <p>
                Обмен
            </p>
            </router-link>
          <!--
            <a class="active" href="#home">Главная</a>
            <a href="#contact">Контакты</a>
            <a href="#about">О нас</a>
            -->
        </nav>
    </div>
</template>

<script>
    export default{
        name: 'b-header',
        data() {
            return{}
        }
    }
</script>

<style lang="scss">
    *{
        box-sizing: border-box;
    }

    .b-header{
        margin-top: 0px;
    }

    body { 
    margin: 0;
    font-family: Arial, sans-serif;
    }

    .b-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: $main-bg;
    padding: 20px 10px;
    }

    .wrap-logo {
    display: flex;
    align-items: center;
    
    }

    .b-header a {
    color: white;
    padding: 12px;
    text-decoration: none;
    font-size: 18px; 
    border-radius: 4px;
    }

    nav {
    display: flex;
    align-items: center;
    }
</style>
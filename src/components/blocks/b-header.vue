<template>
    <div class="b-header">
        <div class="wrap-logo">
        <a href="#logo" class="logo">Логотип сайта</a>
        </div>
        <nav>
            <a class="active" href="#home">Главная</a>
            <a href="#contact">Контакты</a>
            <a href="#about">О нас</a>
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

<style>
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
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #FFEB3B;
    padding: 20px 10px;
    }

    .wrap-logo {
    display: flex;
    align-items: center;
    
    }

    .b-header a {
    color: #212121;
    padding: 12px;
    text-decoration: none;
    font-size: 18px; 
    border-radius: 4px;
    }

    
    .b-header a:hover {
    background-color: #FBC02D;
    color: #212121;
    }

    .b-header a.active {
    background-color: #FBC02D;
    }

    nav {
    display: flex;
    align-items: center;
    }
</style>
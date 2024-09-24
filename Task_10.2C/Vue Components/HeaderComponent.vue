<template>
    <header>
        <h1>Save the Whales</h1>
        <div class="btn">
            <a href="#donate">Donate Now</a>
        </div>
    </header>
</template>

<script setup>

</script>

<style scoped>
    header {
        background: #011099;
        color: white;
        display: flex;
        align-items: center;
        justify-content: right;
    }

    h1 {
        text-align: center;
        width: 50%;
    }

    .btn {
        width: 25%;
        display: flex;
        flex-direction: row;
        justify-content: right;
        padding-right: 20px;
    }

    a {
        background: #02a440;
        border-radius: 5px;
        padding: 15px;
        width: 100px;
        text-align: center;
        color: white;
        text-decoration: none;
    }
</style>
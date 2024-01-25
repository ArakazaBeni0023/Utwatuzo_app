<script>
export default {
    props: {
        text: String,
        version: String
    }
}
</script>

<template>
    <img src="../assets/images/thoth-drk.png" class="cover-drk">
    <div class="brand">
        <img src="../assets/images/logo.png" alt="logo">
        <div class="text">
            <img class="brand_name" src="../assets/images/utwatuzo.png" alt="brand-name">
            <p>{{ text }}</p>
            <p>{{ version }}</p>
        </div>
    </div>
    <p class="copyright">© 2024 Developed & Designed by <a href="https://www.rizzova.com/" target="_blank"> Rizzova

            Systems</a>.</p>
</template>

<style scoped>
.cover-drk {
    position: absolute;
    width: 120%;
    left: -30%;
    bottom: 0;
    opacity: .05;

}

.brand {
    /* width: (40%, 80%); */
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.brand img {
    width: 100px;
    height: auto;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, .7));
}

.brand .text {
    text-align: center;
}

.brand .text .brand_name {
    width: 230px;
}

.brand .text p {
    color: #878787;
}
</style>
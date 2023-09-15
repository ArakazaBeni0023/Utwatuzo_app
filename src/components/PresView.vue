<script>
export default {
    props: {
        text: String
    }
}
</script>

<template>
    <img src="../assets/images/thoth-drk.png" class="cover-drk">
    <div class="brand">
        <img src="../assets/images/logo.png" alt="logo">
        <div class="text">
            <h1>Utwâtuzo</h1>
            <p>{{ text }}</p>
        </div>
    </div>
    <p class="copyright">Developed & Designed by <a href="https://www.rizzova.com/" target="_blank"> Rizzova </a>
        Systems.</p>
</template>

<style scoped>
@font-face {
    font-family: 'Birthday Party';
    src: url('../assets/fonts/BirthdayParty-rgGeL.otf');
}

.cover-drk {
    position: absolute;
    width: 120%;
    left: -30%;
    bottom: 0%;
    opacity: .05;
    user-select: none;
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

.brand .text h1 {
    font-size: 4rem;
    font-family: 'Birthday Party';
    letter-spacing: 3px;
}

.brand .text p {
    color: #878787;
}
</style>
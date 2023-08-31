<script>
export default {
    mounted() {
        setTimeout(() => {
            this.$router.push('/kwatura');
        }, 5000);
    }
}
</script>

<template>
    <div class="kwakira">
        <div class="brand">
            <img src="../assets/A_logo.png" alt="logo">
            <div class="text">
                <h1>Utwâtuzo</h1>
                <p>Ubwiza bw'amajāmbo y'Íkirŭndi.</p>
            </div>
        </div>
        <p class="copyright">Developed & Designed by <a href="https://www.rizzova.com/" target="_blank"> Rizzova </a>
            Systems.</p>
    </div>
</template>

<style scoped>
.kwakira {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    animation: fade-in 6s;
    user-select: none;
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}


.brand {
    width: (40%, 80%);
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.brand img {
    width: 120px;
    height: auto;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, .7));
    /* -webkit-box-reflect: below -0px linear-gradient(to bottom, 
    rgba(0,0,0,0.0),  rgba(0, 0, 0, 0.4)); */
}   

.brand .text {
    text-align: center;
}

.brand .text h1 {
    font-size: 4rem;
    font-family: 'Hey Jintan';
    letter-spacing: 5px;
    margin-block-start: -50px;
    text-shadow: 0px 5px 0px #1566e9;

}

.brand .text p {
    color: #878787;
}
</style>
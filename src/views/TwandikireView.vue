<template>
    <div class="title">
        <i class="bi bi-arrow-left-short" @click="this.$router.push('/igenamero')"></i>
        <p>Twandikire</p>
    </div>
    <div class="twandikire">
        <a href="https://www.facebook.com/utwatuzo" target="_blank" class="row">
            <span>
                <i class="bi bi-facebook"></i>
                <p>Facebook</p>
            </span>
        </a>
        <a href="https://www.instagram.com/utwatuzo" target="_blank" class="row">
            <span>
                <i class="bi bi-instagram"></i>
                <p>Instagram</p>
            </span>
        </a>
        <a href="https://www.whatsapp.com/" target="_blank" class="row">
            <span>
                <i class="bi bi-whatsapp"></i>
                <p>Whatsapp</p>
            </span>
        </a>
        <a href="https://www.gmail.com/" target="_blank" class="row">
            <span>
                <i class="bi bi-envelope"></i>
                <p>G-mail</p>
            </span>
        </a>
    </div>
    <p class="copyright">Developed & Designed by<a href="https://www.rizzova.com/" target="_blank">Rizzova</a>Systems.
    </p>
</template>

<style scoped>
.title {
    background: #0e0e15c8;
    color: #d1d3d5;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 23px;
    font-weight: 800;
    gap: 1rem;
    padding-inline-start: 1rem;
    animation: fade-in 2s;
}

.title .bi {
    border-radius: 50px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background .5s ease;
}

.title .bi:hover {
    background: #262635;
}

.twandikire {
    width: 100%;
    height: 100%;
    position: relative;
    animation: fade-in 2s;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-block-start: 2rem;
    padding-block-end: 4rem;
    padding-inline: 1rem;
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.row {
    width: 100%;
    height: 60px;
    background: #1b1b27;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 1rem;
    font-size: 1.3rem;
    color: #5e6671;
    text-decoration: none;
}

.row:hover {
    background: #262635;
}

.row span {
    display: flex;
    gap: 1rem;
}

.row span p {
    color: #d1d3d5;
}
</style>
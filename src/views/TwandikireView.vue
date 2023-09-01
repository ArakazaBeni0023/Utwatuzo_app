<script>
export default {
    data() {
        return {
            message: "",
        }
    },
    methods: {
        openGmail() {
            const to = "arakazabenitresor@gmail.com";
            const subject = "Iciyumviro kuri Application Utwâtuzo";
            const body = this.message;

            const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(url, "_blank");
        },
    },
};
</script>

<template>
    <div class="title">
        <img src="../assets/utwatuzo-drk.png">
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
        <a href="https://wa.me/qr/FTRRDKHOVLRYO1" target="_blank" class="row">
            <span>
                <i class="bi bi-whatsapp"></i>
                <p>Whatsapp</p>
            </span>
        </a>
        <a href="https://www.gmail.com/" @click="openGmail" target="_blank" class="row">
            <span>
                <i class="bi bi-envelope"></i>
                <p>G-mail</p>
            </span>
        </a>
    </div>
    <p class="copyright">Developed & Designed by<a href="https://www.rizzova.com/" target="_blank">Rizzova</a>Systems.</p>
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
    animation: fade-in .8s;
    user-select: none;
    position: relative;
    overflow: hidden;
}

.title img {
    position: absolute;
    width: 55%;
    top: -20%;
    right: 0%;
    opacity: .15;
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
    animation: fade-in .8s;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-block-start: 2rem;
    padding-block-end: 4rem;
    padding-inline: 1rem;
    user-select: none;
}

@keyframes fade-in {
    0% {
        transform: translateX(5%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
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
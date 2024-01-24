<script>
export default {
    data() {
        return {
            platforms: [
                {
                    'link': 'https://www.facebook.com/ubwatuzo',
                    'icon': 'bi-facebook',
                    'title': 'Facebook',
                },
                {
                    'link': 'https://www.gmail.com/',
                    'icon': 'bi-envelope',
                    'title': 'G-mail',
                },
            ],
            message: "",
        }
    },
    methods: {
        openGmail() {
            const to = "arakazabenitresor@gmail.com";
            const subject = "Iciyumviro cawe kuri Application Utwâtuzo";
            const body = this.message;

            const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(url, "_blank");
        },
    },
};
</script>

<template>
    <div class="twandikire">
        <div class="title">
            <img src="../assets/images/utwatuzo-drk.png">
            <i class="bi bi-arrow-left-short" @click="this.$router.push('/igenamero')"></i>
            <p>Twāndikire</p>
        </div>
        <div class="container">
            <a :href="item.link" target="_blank" v-for="(item, index) in platforms" :key="item" class="row"
                @click="index === 3 ? openGmail() : null">
                <span>
                    <i class="bi" :class="item.icon"></i>
                    <p>{{ item.title }}</p>
                </span>
            </a>
        </div>
    </div>
</template>

<style scoped>
.twandikire {
    width: 100%;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    animation: fade-in .8s;
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

.title {
    background: #0e0e15c8;
    color: #d1d3d5;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 800;
    gap: 1rem;
    padding-inline-start: 1rem;
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

.container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.row {
    margin: auto;
    width: 92%;
    height: 60px;
    background: #0e0e15c8;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 1rem;
    font-size: 1.1rem;
    color: #5e6671;
    text-decoration: none;
}

.row:hover {
    background: #15151f;
}

.row span {
    display: flex;
    gap: 1rem;
}

.row span p {
    color: #d1d3d5;
}

@media (max-width:768px) {
    .row {
        width: 92%;
    }
}
</style>
<script>
import NavBar from '../components/NavBar.vue'
export default {
    components: {
        NavBar
    },
    data() {
        return {
            settings: [
                {
                    'to': '/amabwiriza',
                    'icon': 'bi-file-earmark-text-fill',
                    'title': 'Amategeko',
                    'chevron': 'bi-chevron-right'
                },
                {
                    'to': '/twandikire',
                    'icon': 'bi-people-fill',
                    'title': 'Twandikire',
                    'chevron': 'bi-chevron-right'
                },
                {
                    'to': '/aboturibo',
                    'icon': 'bi-info-circle-fill',
                    'title': 'Turi Bande?',
                    'chevron': 'bi-chevron-right'
                },
            ]
        }
    }
}
</script>

<template>
    <div class="igenamero">
        <div class="title">
            <img src="../assets/images/utwatuzo-drk.png">
            Igenamero
        </div>
        <div class="container">
            <div class="row" @click="this.$router.push(`${set.to}`)" v-for="set in settings" :key="set">
                <span>
                    <i class="bi" :class="set.icon"></i>
                    <p>{{ set.title }}</p>
                </span>
                <i class="bi" :class="set.chevron"></i>
            </div>
        </div>
    </div>
    <NavBar />
</template>

<style scoped>
.igenamero {
    width: 100%;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    user-select: none;
    animation: fade-in .8s;
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
    justify-content: center;
    align-items: center;
    font-size: 23px;
    font-weight: 800;
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

.container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-inline: 4rem;
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

@media (max-width:768px) {
    .container {
        padding-inline: 1rem;
    }
}
</style>
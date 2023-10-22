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
                    'to': '/uko_ikora',
                    'icon': 'bi-file-earmark-text-fill',
                    'title': 'Ukó Ikora',
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
                    'title': 'Turí bāndé?',
                    'chevron': 'bi-chevron-right'
                },
            ]
        }
    }
}
</script>

<template>
    <div class="main-container">
        <div class="container">
            <div class="title">
                <img src="../assets/images/utwatuzo-drk.png">
                Igenamero
            </div>
            <div class="settigns-container">
                <div class="row" @click="this.$router.push(`${set.to}`)" v-for="set in settings" :key="set">
                    <span>
                        <i class="bi" :class="set.icon"></i>
                        <p>{{ set.title }}</p>
                    </span>
                    <i class="bi" :class="set.chevron"></i>
                </div>
            </div>
        </div>
        <div class="navbar">
            <NavBar />
        </div>
    </div>
</template>

<style scoped>
.main-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.container {
    flex-grow: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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

.navbar {
    display: flex;
    align-items: center;
    padding: .5rem 0rem;
}

.title {
    background: #0e0e15c8;
    color: #d1d3d5;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
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

.settigns-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-block-start: 1rem;
    padding-inline: 1rem;
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
    font-size: 1rem;
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
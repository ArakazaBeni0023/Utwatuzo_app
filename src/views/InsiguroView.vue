<script>
import NavBar from '../components/NavBar.vue'
export default {
    components: {
        NavBar
    },
    data() {
        return {
            lessons: ["Icirwa ca mbere", "Icirwa ca kabiri", "Icirwa ca gatatu"]
        }
    }
}
</script>

<template>
    <div class="insiguro">
        <div class="title">
            <img src="../assets/images/utwatuzo-drk.png">
            Insiguro
        </div>
        <div class="container">
            <div class="row" v-for="item in lessons" :key="item">
                <span>
                    <p>{{ item }}</p>
                </span>
                <i class="bi bi-chevron-right"></i>
            </div>
        </div>
    </div>
    <NavBar />
</template>

<style scoped>
.insiguro {
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
    gap: .5rem;
}

.row span p {
    color: #d1d3d5;
}

@media (max-width:768px) {
    .container {
        padding-inline: 1rem;
    }
}

@media(max-width:912px) {
    .container {
        padding-inline: 2rem;
    }
}
</style>
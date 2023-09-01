<script>
import NavBar from '../components/NavBar.vue'
export default {
    components: {
        NavBar
    },
}
</script>

<template>
    <div class="title">
        <img src="../assets/utwatuzo-drk.png">
        Igenamero
    </div>
    <div class="igenamero">
        <div class="row" @click="this.$router.push('/amabwiriza');">
            <span>
                <i class="bi bi-file-earmark-text-fill"></i>
                <p>Amategeko</p>
            </span>
            <i class="bi bi-chevron-right"></i>
        </div>
        <div class="row" @click="this.$router.push('/twandikire');">
            <span>
                <i class="bi bi-people-fill"></i>
                <p>Twandikire</p>
            </span>
            <i class="bi bi-chevron-right"></i>
        </div>
        <div class="row" @click="this.$router.push('/aboturibo');">
            <span>
                <i class="bi bi-info-circle-fill"></i>
                <p>Turi Bande?</p>
            </span>
            <i class="bi bi-chevron-right"></i>
        </div>
    </div>
    <NavBar />
</template>

<style scoped>
template {
    position: fixed;
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

.igenamero {
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
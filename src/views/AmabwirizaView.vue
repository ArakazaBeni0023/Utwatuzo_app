<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="amabwiriza">
        <div class="title">
            <img src="../assets/images/utwatuzo-drk.png">
            <i class="bi bi-arrow-left-short" @click="this.$router.push('/igenamero')"></i>
            <p>Amategeko</p>
        </div>
        <div class="container">
            <div v-for="item in 4" :key="item">
                <h1>Lorem ipsum.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem natus necessitatibus, nobis itaque
                    tempore
                    laborum nihil illo tempora asperiores, eaque quam amet earum? Nostrum repudiandae facilis itaque.
                    Suscipit,
                    mollitia cupiditate?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem natus necessitatibus, nobis itaque
                    tempore
                    laborum nihil illo tempora asperiores, eaque quam amet earum? Nostrum repudiandae facilis itaque.
                    Suscipit,
                    mollitia cupiditate?
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.amabwiriza {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    justify-content: start;
    align-items: center;
    font-size: 23px;
    font-weight: 800;
    gap: 1rem;
    padding-inline-start: 1rem;
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-inline: 4rem;
    padding-bottom: 2rem;
    text-align: justify;
}

@media (max-width:768px) {
    .container {
        padding-inline: 1rem;
    }
}
</style>
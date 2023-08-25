<template>
    <div class="title">
        <i class="bi bi-arrow-left-short" @click="this.$router.push('/igenamero')"></i>
        <p>Amabwiriza</p>
    </div>
    <div class="amabwiriza">

    </div>
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

.amabwiriza {
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
</style>
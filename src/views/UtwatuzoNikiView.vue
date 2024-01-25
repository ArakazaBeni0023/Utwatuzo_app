<template>
    <div class="main">
        <img class="thoth" src="../assets/images/thoth-drk.png">
        <div class="title">
            <img src="../assets/images/utwatuzo-drk.png">
            <i class="bi bi-arrow-left-short" @click="this.$router.push('/insiguro')"></i>
            <p>Utwâtuzo ní ikí ?</p>
        </div>
        <div class="container">
            <h3>UTWÂTUZO NÍ IKÍ?</h3><br>
            <p>
                <b>Utwâtuzo</b> ni utumenyētso dushirá ku majwí tugahéza tukērekana ingéne ijāmbo risomwá. Mu kirŭndi
                harihó
                amajāmbo mĕnshi yāndikwá kumwé aríko ntăvugwe kumwé. Iyó rēró umūntu aríko arasoma amajāmbo nk'ăyo,
                arashóbora kugira amadĭdāne mu kuyasoma cânké akayasoma nâbí bitāndúkānye n'ûkó uwayânditse yashātsé
                kuvúga. Iyó utwâtuzo dukorêshejwe nêzá ayo madĭdane aravahó.
            </p><br>
            <h4>Uturorero:</h4>
            <ul style="margin-left: 1.5rem;">
                <li>inkokó / inkōko</li>
                <li>intore / intŏre</li>
                <li> inzúzi / inzûzi</li>
                <li>ibisókozo / ibisôkōzo</li>
                <li>inzara / inzâra</li>
                <li>umuryāngo / umuryângo</li>
            </ul><br>
            <p><b>Soma vyïnshi ng'ăha:</b></p>
            <a href="https://www.ikirundi.org/indimburo/utwatuzo/utwatuzo-ni-iki/">www.ikirundi.org
            </a>
        </div>
    </div>
</template>

<style scoped>
.main {
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

.thoth {
    position: absolute;
    width: auto;
    height: 100%;
    top: 0%;
    right: 0%;
    opacity: .06;
    transform: rotateY(180deg);
    z-index: -10;
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
    margin: auto;
    width: 92%;
    height: 100%;
    text-align: justify;
}

.container h3 {
    letter-spacing: 1px;
}

.container h4 {
    letter-spacing: 1px;
}

.container p {
    color: #81818d;
    letter-spacing: 1px;
}

.container p b {
    color: #fff;
}

a {
    all: unset;
    color: var(--link);
    cursor: pointer;
}

a:hover {
    color: var(--link-hover);
}
</style>
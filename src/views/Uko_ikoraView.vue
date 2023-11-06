<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="uko_ikora">
        <img class="thoth" src="../assets/images/thoth-drk.png">
        <div class="title">
            <img src="../assets/images/utwatuzo-drk.png">
            <i class="bi bi-arrow-left-short" @click="this.$router.push('/igenamero')"></i>
            <p>Uko Ikora</p>
        </div>
        <div class="container">
            <div>
                <h3>Ní guté nó hīndúra ivyó nāndítse?</h3>
                <p>Nkûkó bibonéka kuru pápuró ushikirakó <b>Kwâtura</b> hari ibicé bibiri bikurú bikurú:</p><br>

                <h4>1. Ígicé cā mbere nâhó wāndíka inyandiko zāwe ukenéye kó hajakó utwâtuzo.</h4>
                <p style="margin-left: 1.5rem;">Andika amajāmbo yāwe kū gicé cā mberé hāa  ucè ufyônda kurí bouton yîtwa
                    <b>Atura</b>.
                </p><br>

                <h4>2. Ígicé câ kábiri nahó ubonéra inyandiko ziríko utwâtuzo.</h4>
                <p style="margin-left: 1.5rem;">Kugíra wîmúre inyandiko zāwé zatúye fyōnda kūnyandiko incúro zibiri
                    zikurukirana zirí kugicé câ kábiri.
                </p>
            </div>
            <div>
                <h3>Ní guté nó rōndera ijāmbo?</h3>
                <p>Ja kuru papuro rwó kurōndererakó hāma wāndíke ijāmbo ukenéye ahãbigenewe ijāmbo rica ryîzana, rítabonétse
                    nûkó ritarímwo mū bubiko cânke
                    ritātúrwa.</p> <br>
                <p>
                    Ijāmbo ukenéye ríbonetse câ ufyônda kurí ryó kugíra uryïmure.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.uko_ikora {
    width: 100%;
    height: 100%;
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
    user-select: none;
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
    text-align: justify;
    gap: 1rem;
    padding-inline: 4rem;
    padding-bottom: 2rem;
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


@media (max-width:768px) {
    .container {
        padding-inline: 1rem;
    }
}
</style>
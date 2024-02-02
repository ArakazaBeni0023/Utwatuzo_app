<template>
    <div class="main">
        <img class="thoth" src="../assets/images/thoth-drk.png">
        <div class="title">
            <img src="../assets/images/utwatuzo-drk.png">
            <i class="bi bi-arrow-left-short" @click="this.$router.push('/insiguro')"></i>
            <p>Insígūro y'ûtwâtuzo</p>
        </div>
        <div class="container">
            <h3>INSÍGŪRO Y'ÛTWÂTUZO (J.-B. NTAHOKAJÁ)</h3><br>
            <p>
                Ikirŭndi ntíkirândikwa nk'ûkó kivugwá. Indóme twĭgiye kó gusoma ntízări zâgenewe kwāndika ururími rwâcu,
                hari hó agaháze. Mu gusoma ikirŭndi hári akāntu twīyóngerera kó uwŏkāndika vyōkwôroha gusūmba ntitúbe
                túkididīnganya nk'ütâzi gusoma cânké atūmvá icó avugá. Uwo twâtuzo ntimúbone gúrtyo sí na twînshi,
                ntitugōye imenyēra, ni dutānu tutarēga, rābire aha:
            </p><br>
            <p style="margin-left: 1.5rem;">
                1. <b>Umutāma, umurōngo, ishūri</b>; ako gakwēgo kērekana ijwí rirāndîra
                mugábo ritadūgá.
            </p><br>
            <p style="margin-left: 1.5rem;">
                2. <b>Umusóre, ishámi, umutwé</b>; ako gakágo kaja kw'ījwí ryīrása hējuru, ritarāndîra.
            </p><br>
            <p style="margin-left: 1.5rem;">
                3. <b>Umwâna, urwâmo, igicâniro</b>; ako gakōfēro kērekana ijwí ryīrása, ryīhînga rîmanuka.
            </p><br>
            <p style="margin-left: 1.5rem;">
                4. <b>Umwămi, ităbi, ivyămwa</b>; ako gatemére gateretse kw'ījwí ryīhînze rídūga
            </p><br>
            <p style="margin-left: 1.5rem;">
                5. <b>Böse, twëse, twëmpi</b>; utwo tuburûngu tubiri twērekana ijwí ridūgá rikamana mu kirëré.
                Tudushira nó kurí <b>n</b> ngo tuyităndukānye na <b>ny</b>: amenye umubĭndi, amenye icĭgwa; urusâto
                rukanyé, amâzi
                akanyé.
            </p><br>
            <p>
                Amajwí arí ku rugero rusānzwé, atarāndîra, atadūgá, atamanúka ntâ kâtuzo akenéye: umugabo, ikirago,
                inzu, inzira. Utwâtuzo dukenewe cānecāne mu mivugíre y'ámavuga nó mw'īfátanya ry'ámajāmbo.
            </p>
            <br>
            <hr>
            <p>
                <i>J.-B. NTAHOKAJÁ, Imigēnzo y'íkirŭndi, 1978, urup. 2</i>
            </p>
            <br>
            <p><b>Soma vyïnshi ng'ăha:</b></p>
            <a href="https://www.ikirundi.org/indimburo/utwatuzo/insiguro-y-utwatuzo/">
                www.ikirundi.org
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
    padding-bottom: 2rem;
}

.container h3 {
    text-align: left;
    letter-spacing: 1px;
}

.container p {
    color: #81818d;
    letter-spacing: 1px;
}

.container p b {
    color: #bcbbbb;
    font-weight: 600;
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
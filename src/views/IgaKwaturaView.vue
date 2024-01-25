<template>
    <div class="main">
        <img class="thoth" src="../assets/images/thoth-drk.png">
        <div class="title">
            <img src="../assets/images/utwatuzo-drk.png">
            <i class="bi bi-arrow-left-short" @click="this.$router.push('/insiguro')"></i>
            <p>Ígá kwătura</p>
        </div>
        <div class="container">
            <h4>ITEGEREZE NÊZÁ</h4>
            <p>
                Iki gicé si icó kwĭgīsha imvúgo kukó Abarŭndi böse ntibavuga amajāmbo yöse kumwé. Akarorero: Hari abavúga
                <b>umugóre</b> abăndi na bó bakavuga <b>umugoré</b>. Emmanuel Nkēngurutse Mr N yatégūye iyi nyandiko avuga
                <b>umugoré</b>.
            </p><br>
            <p>
                Rēró intūmbēro y'ĭki gicé ni ukwĭgīsha utwâtuzo kugíra abāntu bamenyé ingéne bōkwāndíka ivyó būmvîse ku
                buryó umūntu abísomye yōbivugá nk'úwabívuze ubwā mbere.
            </p><br>
            <h4>1. Amajāmbo <span>9</span> y'îshímikiro mu kwătura</h4>
            <p>Abāntu bafise uburyó butāndúkānye bakorêsha mu kwĭga cânké kwĭgīsha utwâtuzo. Bumwé murí ubwo buryó ni
                ugukórēsha amajāmbo 9 y'îshimikiro mu kwătura.</p>
            <br>
            <table>
                <thead>
                    <td>Ijāmbo</td>
                    <td>Agace k'îshímikiro</td>
                    <td>Utŭndi turorero</td>
                </thead>
                <tr>
                    <td>umugabo</td>
                    <td>gabo</td>
                    <td>amaguru, ibarabara, ibiharage, amateke, umutamana</td>
                </tr>
                <tr>
                    <td>umutāma</td>
                    <td>tāma</td>
                    <td>umūntu, cāne, umurōngo, ishūri, ikīntu, ingōna</td>
                </tr>
                <tr>
                    <td>umwâna</td>
                    <td>âna</td>
                    <td>Imâna, urwâmo, urwânko, iryînyo, ijîsho, urûzi, inkôna, inzêgo</td>
                </tr>
                <tr>
                    <td>umwămi</td>
                    <td>ămi</td>
                    <td>ităbi, ivyămwa, icănsi, imănza, inzămba, umuzŭngu</td>
                </tr>
                <tr>
                    <td>umusóre</td>
                    <td>sóre</td>
                    <td>ishámi, itára, imbého, umutóbe, inkóno, inzóbe</td>
                </tr>
                <tr>
                    <td>umugoré</td>
                    <td>goré</td>
                    <td>umutwé, indomé, umugeré</td>
                </tr>
                <tr>
                    <td>böse</td>
                    <td>böse</td>
                    <td>bömpi, twëse, twëmpi</td>
                </tr>
                <tr>
                    <td>nêzá</td>
                    <td>nêzá</td>
                    <td>cânké, imêndé, inkôré</td>
                </tr>
                <tr>
                    <td>nīndé</td>
                    <td>nīndé</td>
                    <td>tōyí, cānké, ēgó, kēzá, vyīzá</td>
                </tr>
                <tr>
                    <td colspan="3" class="tfoot"></td>
                </tr>
            </table>
            <br>
            <h4>2. Amajāmbo marēmare</h4>
            <p>Iyó urikó urâtura amajāmbo marēmare urahéza ukātura agacé kamwê kamwé ufátiye kurí aryá majāmbo 9
                y'îshímikiro.</p>
            <br>
            <!-- uturorero -->
            <div>
                <b>Uturorero:</b>
                <div style="margin-left: 1.5rem;  padding-block-start: .5rem;">
                    <p>1. <b>ikirundi</b>:</p>
                    <ul style=" margin-left: 2.5rem;">
                        <li>iki => iki (gabo)</li>
                        <li>rundi => rŭndi (ămi)</li>
                        <span>✔ <b>ikirŭndi</b></span>
                    </ul>
                </div>
                <div style="margin-left: 1.5rem; padding-block-start: .5rem;">
                    <p>2. <b>umushingantahe</b>:</p>
                    <ul style=" margin-left: 2.5rem;">
                        <li>umu => umu (gabo)</li>
                        <li>shinga => shînga (âna)</li>
                        <li>ntahe => ntăhe (ămi)</li>
                        <span>✔ <b>umushîngantăhe</b></span>
                    </ul>
                </div>
                <div style="margin-left: 1.5rem; padding-block-start: .5rem;">
                    <p>3. <b>umushingamateka</b>:</p>
                    <ul style="margin-left: 2.5rem;">
                        <li>umu => umu (gabo)</li>
                        <li>shinga => shînga (âna)</li>
                        <li>mate => máte (sóre)</li>
                        <li>teka => tēká (nīndé)</li>
                        <span>✔ <b>umushîngantăhe</b></span>
                    </ul>
                </div>
            </div>
            <br>
            <h4>3. ITEGEREZE NÊZÁ</h4>
            <p>Uko kwătura agacé kamwê kamwé ntŭvyitiranye nó gucâgagura amajāmbo kukó gucâgagura amajāmbo vyīsûnga ibicé
                vy'ámajāmbo (integûza, inyîtāngizo, itsítso, ingobōtozo, agasôzo, ...)</p> <br>
            <p>Aríko iyó wātúra, amajāmbo uyacamwó uducé wîsūnze amajwí, ugafatira kurí aryá majāmbo 9 y'îshímikiro.</p>
            <br>
            <p><b>Soma vyïnshi ng'ăha:</b></p>
            <a href="https://www.ikirundi.org/indimburo/utwatuzo/twige-kwatura/">www.ikirundi.org
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

table {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    border-collapse: collapse;
    border: 1px solid var(--low-dark)
}

table thead {
    background: var(--low-dark);
    font-weight: bold;
}

td {
    padding: 0.5rem;
}

table tr:nth-child(even) {
    background: var(--tr-bg);
}

.tfoot {
    background: var(--low-dark);
    padding: .5rem;
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
    letter-spacing: 1px;
}

.container h4 {
    letter-spacing: 1px;
}

.container p {
    color: var(--text);
    letter-spacing: 1px;
}

span {
    background: var(--low-dark);
    padding-inline: .5rem;
    padding-block: .2rem;
    font-size: 18px;
}

ul li {
    color: var(--text);
}

.container p b {
    color: var(--light);
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
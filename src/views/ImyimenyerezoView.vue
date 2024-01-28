<script>
export default {
    data() {
        return {
            keyboardType: [
                {
                    title: 'Indomé',
                    ububiko: [
                        'a', 'b', 'c', 'd', 'e',
                        'f', 'g', 'h', 'i', 'j',
                        'k', 'm', 'n', 'o', 'p',
                        'r', 's', 't', 'u', 'v',
                        'w', 'y', 'z'
                    ],
                },
                {
                    title: 'Utwâtuzo',
                    ububiko: [
                        'à', 'á', 'â', 'ā', 'ä', 'ă',
                        'é', 'è', 'ê', 'ë', 'ĕ', 'ē',
                        'î', 'ï', 'í', 'ì', 'ĭ', 'ī',
                        'ô', 'ǒ', 'ö', 'ō', 'ó', 'ò',
                        'ù', 'ú', 'û', 'ŭ', 'ü', 'ū',
                        'ñ', 'n̈',
                    ],
                },
            ],
            currentKeyboard: 0,
            ububiko: [],
            inyishu: [],
            ijambo: '',
            messageVisible: false,
            animation: "animate-in",
            ikibazo: '',
            kosora: '',
            notMatch: false
        }
    },
    computed: {
        motWithoutAccent() {
            return this.ikibazo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        },
    },
    mounted() {
        this.ububiko = this.$store.state.mots;
        this.ikibazo = this.ububiko[230];
    },
    methods: {
        switchKeyboard() {
            var temp = this.keyboardType[0];
            this.keyboardType[0] = this.keyboardType[1];
            this.keyboardType[1] = temp;
        },
        charAt(index) {
            this.inyishu.push(index);
            this.ijambo = this.inyishu.join("");
        },
        backspace() {
            this.inyishu.pop();
            this.ijambo = this.inyishu.join("");
        },
        afficherMessage() {
            this.messageVisible = true;
            setTimeout(() => {
                this.messageVisible = false;
            }, 3000);
        },
        check() {
            if (this.ijambo != '') {
                this.keyboardType[0];
                this.kosora = this.ikibazo;
                if (this.ijambo === this.ikibazo) {
                    console.log(this.ijambo === this.ikibazo);
                    this.afficherMessage();
                    setTimeout(() => {
                        this.other();
                    }, 3000);
                } else {
                    this.afficherMessage();
                    this.notMatch = true;
                    this.other();
                }
            }
        },
        other() {
            this.ikibazo = this.ububiko[Math.floor(Math.random() * this.ububiko.length)];
            this.inyishu = [];
            this.ijambo = '';
        },
    },
}
</script>

<template>
    <div class="main">
        <img class="thoth" src="../assets/images/thoth-drk.png">
        <div class="title">
            <img src="../assets/images/utwatuzo-drk.png">
            <i class="bi bi-arrow-left-short" @click="this.$router.push('/insiguro')"></i>
            <p>Imyîmenyerezo y'ûtwâtuzo</p>
        </div>
        <div class="container">
            <div class="screen">
                <div class="board">
                    <div class="ikibazo">
                        <p>Atura iri jāmbo:</p>
                        <h3>{{ motWithoutAccent }}</h3>
                    </div>
                    <div class="inyishu">
                        <p>Inyishú yāwe:</p>
                        <h2>{{ ijambo }}</h2>
                    </div>
                </div>
                <div class="notif" v-if="messageVisible">
                    <i class="bi bi-check-circle-fill" :class="{ 'bi-x-circle-fill': notMatch }"></i>
                    <h3 v-if="notMatch === false">Inyishú nzīzá</h3>
                    <div class="kosora" v-if="notMatch === true">
                        <h3>Inyishú nzīzá ní:</h3>
                        <p>{{ kosora }}</p>
                    </div>
                </div>
            </div>
            <div class="keyboard">
                <div class="keyboard-type" v-for="(keyboard, index) in keyboardType" :key="index"
                    v-show="currentKeyboard === index">
                    <p class="title" @click="switchKeyboard()">{{ keyboard.title }}</p>
                    <div class="cont">
                        <div class="keys">
                            <div class="key" @click="charAt(key)" v-for="(key, index) in keyboard.ububiko" :key="index">
                                {{ key }}
                            </div>
                        </div>
                        <div class="controls">
                            <i class="bi bi-backspace" @click="backspace()"></i>
                            <i class="bi bi-arrow-repeat" @click="other()"></i>
                            <i class="bi bi-check" @click="check()"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    animation: in .8s;
}

@keyframes in {
    0% {
        transform: translateX(5%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

p {
    color: var(--text);
    letter-spacing: 1px;
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
    width: 30%;
    height: 100%;
    text-align: justify;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
}

.screen,
.board,
.ikibazo,
.inyishu,
.keyboard,
.keyboard-type,
.keyboard-type .keys,
.controls,
.cont {
    display: flex;
}

.screen,
.board {
    flex-direction: column;
    gap: 2rem;
}

.screen {
    height: 60%;
    padding-bottom: 1rem;
    overflow: hidden;
}

.board {
    flex-grow: 1;
}

.ikibazo {
    flex-direction: column;
    gap: .2rem;
    border-bottom: 1px solid var(--tr-bg);
    padding-bottom: .5rem;
}

.inyishu {
    flex-direction: column;
    gap: 1rem;
    border-bottom: 1px solid var(--tr-bg);
    padding-bottom: 1rem;
}

.notif {
    height: 30%;
    background: var(--dark);
    animation: fade-in .8s;
    display: flex;
    align-items: center;
    padding-inline: 1rem;
    gap: 1rem;
    border-radius: .3rem;
}

.notif .bi-check-circle-fill {
    font-size: 58px;
    color: green;
}

.notif .bi-x-circle-fill {
    color: rgb(255, 125, 125);
}

.notif .kosora h3,
.notif .kosora p {
    color: rgb(255, 125, 125);
}

.notif h3 {
    color: green;
}

@keyframes fade-in {
    0% {
        transform: translateY(30%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.keyboard {
    /* flex-direction: column; */
    gap: .5rem;
}

.keyboard .keyboard-type {
    flex-direction: column;
    gap: .5rem;
}

.keyboard .keyboard-type .title {
    all: unset;
    border-bottom: 1px solid var(--nav-bd);
    padding: .8rem 1rem;
    text-align: center;
    background: var(--nav-link-hover);
}

.keyboard .keyboard-type .title:hover {
    background: var(--nav-bd);
}

.keyboard .keyboard-type .keys {
    flex-grow: 1;
    flex-wrap: wrap;
    gap: .3rem;
}

.keyboard-type .keys .key,
.controls .bi {
    width: 50px;
    height: 55px;
    flex: 1 1 50px;
    padding: .5rem;
    border: 2px solid var(--low-dark);
    border-radius: .3rem;
    transition: background .5s ease;
    cursor: pointer;
}

.keyboard-type .keys .key:hover,
.controls .bi:hover,
.keyboard-type .keys .key:focus,
.controls .bi:focus {
    background-color: var(--low-dark);
}

.cont {
    gap: 0.5rem;
}

.controls {
    gap: .3rem;
    flex-direction: column;
}

.controls .bi-check {
    flex: 1 1 100px;
    background: var(--bd-color);
    border: 2px solid var(--bd-color);
    font-size: 18px;
    transition: opacity .5s ease;
}

.controls .bi-check:hover,
.controls .bi-check:focus {
    background: var(--bd-color);
    opacity: .8;
}


@media (max-width:768px) {
    .container {
        width: 92%;
    }

}
</style>
<script>
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      inPutText: '',
      outPutText: '',
      messageVisible: false,
      ububikoAtabwatuzo: [],
      ububikoBwindome: [],
    }
  },
  mounted() {
    this.ububikoBwindome = this.$store.state.mots
    this.enleverAccents();
  },
  methods: {
    kurakoUbwatuzo(text) {
      var accents = [
        "áàâãäåæ",
        "éèêëè",
        "íìîïì",
        "óòôõöò",
        "úùûüù",
        "çç",
        "ññ",
        "œœ",
        "ææ",
        "ÀÁÂÃÄÅÆ",
        "ÈÉÊËÈ",
        "ÍÌÎÏÌ",
        "ÓÒÔÕÖÒ",
        "ÚÙÛÜÙ",
        "ÇÇ",
        "ÑÑ",
        "ŒŒ",
        "ÆÆ",
      ];
      for (var i = 0; i < accents.length; i++) {
        text = text.replace(new RegExp(accents[i], "g"), accents[i].replace(/æ/g, "ae"));
      }
      return text.toLowerCase();
    },
    enleverAccents() {
      this.ububikoAtabwatuzo = this.ububikoBwindome.sort().map(mot => {
        return mot.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      });
    },
    kwatura() {
      var inPutText = this.inPutText.trim().toLowerCase();
      var inputSansAccents = this.kurakoUbwatuzo(inPutText);
      var motsEntres = inputSansAccents.split(" ");
      var resultat = "";

      for (var i = 0; i < motsEntres.length; i++) {
        var motTrouve = false;

        for (var j = 0; j < this.ububikoAtabwatuzo.length; j++) {
          if (this.ububikoAtabwatuzo[j] === motsEntres[i]) {
            resultat += this.ububikoBwindome[j] + " ";
            motTrouve = true;
            break;
          }
        }

        if (!motTrouve) {
          resultat += motsEntres[i] + " ";
        }
      }

      this.outPutText = resultat.trim().toLowerCase();
    },
    afficherMessage() {
      this.messageVisible = true;
      setTimeout(() => {
        this.messageVisible = false;
      }, 2000);
    },
    kwimura() {
      if (this.outPutText.trim() !== '') {
        navigator.clipboard.writeText(this.outPutText)
          .then(() => {
            this.afficherMessage();
          });
      }
    }
  },
}
</script> 

<template>
  <div class="main-container">
    <img src="../assets/images/thoth-drk.png" class="thoth-img" alt="thoth">
    <div class="container">
      <div class="impindura">
        <div class="input-section">
          <textarea v-model="inPutText" placeholder="Andika ng'ăha ..." name="textInput"></textarea>
          <button v-if="inPutText.length != 0" @click="kwatura">Atura</button>
        </div>
        <div class="output-section" @click="kwimura">
          {{ outPutText }}
        </div>
      </div>
    </div>
    <div class="navbar">
      <NavBar />
    </div>
  </div>
  <div v-if="messageVisible" class="message"><i class="bi bi-check-circle"></i> Vyïmutse</div>
</template>

<style scoped>
.main-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
}

.thoth-img {
  position: absolute;
  width: auto;
  height: 100%;
  top: 0%;
  right: -40%;
  opacity: .06;
  transform: rotateY(180deg);
  user-select: none;
  z-index: -10;
}


.container {
  flex-grow: 1;
  padding-block-start: 1rem;
  padding-inline: 1rem;
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

.navbar {
  display: flex;
  align-items: center;
  padding: .5rem 0rem;
}

.impindura {
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-section,
.output-section {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

textarea {
  all: unset;
  background: #0e0e15c8;
  color: rgb(235, 235, 235);
  height: 100%;
  padding: .5rem;
  border-radius: .5rem;
  border: 1px solid #2b3648;
}

textarea:focus {
  border: 1px solid #33558b;
}

button {
  all: unset;
  background: rgb(20, 91, 142);
  padding: 0.5rem 1rem;
  position: absolute;
  bottom: 4%;
  right: 2%;
  border-radius: 5px;
}

button:hover {
  background: rgb(49, 134, 195);
}

.output-section {
  background: #0e0e15c8;
  border-radius: .5rem;
  border: 1px solid #2b3648;
  padding: 1rem;
}

.output-section:hover {
  border: 1px solid #33558b;
}

.message {
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0);
  color: #ffffff;
  padding: 1rem;
  display: flex;
  gap: .5rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: upMsg .5s;
}

.message .bi-check-circle {
  color: #40e14b;
}

@keyframes upMsg {
  0% {
    bottom: 0;
  }

  100% {
    bottom: 10%;
  }
}

@media (min-width:768px) {
  .container {
    padding-inline: 2rem;
  }

  .impindura {
    height: 100%;
    display: flex;
    flex-direction: inherit;
  }
}
</style>
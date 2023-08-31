<script>
import NavBar from '../components/NavBar.vue'
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
          })
          .catch((error) => {
            console.error("Erreur lors de la copie du texte :", error);
          });
      }
    }

  },
}
</script> 

<template>
  <div class="home">
    <div class="input_side">
      <h2>Andika Ng'ăha</h2>
      <p>Hajakó utwâtuzo ahó bíkenewe (wirinde gushiramwo UDUKWABU n'UTUBURUNGU)</p>
      <textarea class="textarea" v-model="inPutText" placeholder="Andika icó ushâka ..."></textarea>
      <button v-if="inPutText.length > 0" class="guhindura" @click="kwatura">Atura</button>
    </div>
    <div class="output_side ">
      <h2>Inyishú</h2>
      <p v-if="outPutText.length > 0">Ubu inyandiko zirikó ubwâtuzo bw'Ikirŭndi
      </p>
      <div class="screen" v-touch:longpress="kwimura">
        {{ outPutText }}
      </div>
    </div>
    <div v-if="messageVisible" class="message"><i class="bi bi-check-circle"></i> Vyimutse</div>
  </div>
  <NavBar />
</template>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  animation: fade-in .8s;
  padding-top: 2rem;
  padding-bottom: 2.5rem;
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

.input_side,
.output_side {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  gap: 1rem;
  user-select: none;
}

h2 {
  color: #f0f5f0;
}

p {
  margin-block-start: -1rem;
  color: #5e6671;
  font-size: 14px;
}

.textarea {
  all: unset;
  background: #0d0d14;
  color: rgb(235, 235, 235);
  text-align: start;
  padding: 1rem;
  border-radius: .5rem;
  transition: border .5s ease;
  border: 1px solid #2b3648;
  font-family: 'corbel';
  height: 100%;
}

.textarea:focus {
  border: 1px solid #33558b;
}

.screen {
  position: relative;
  background: #0d0d14;
  padding: 1rem;
  border-radius: .5rem;
  transition: border .5s ease;
  border: 1px solid #2b3648;
  font-family: 'corbel';
  height: 100%;
  overflow: auto;
}

.screen:hover {
  cursor: pointer;
  background: #191925;
  border: 1px solid #33558b;
}

.guhindura {
  all: unset;
  text-align: center;
  padding: .5rem 1rem;
  background: rgb(20, 91, 142);
  color: #fff;
  border-radius: .3rem;
  cursor: pointer;
  transition: background .5s ease;
  opacity: 1;

}

.guhindura:hover {
  background: rgb(33, 158, 248);
}

span {
  background: #000;
  color: #6f747b;
  font-size: 16px;
  padding: .5rem;
  border-radius: 100%;
}

.message {
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  background: rgb(0, 0, 0);
  color: #ffffff;
  padding: 1rem;
  display: flex;
  gap: .5rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: up .5s;
}

.message .bi-check-circle {
  color: #2fbc38;
}

@keyframes up {
  0% {
    bottom: 0%;
  }

  100% {
    bottom: 10%;
  }
}

@media(max-width:768px) {
  .home {
    width: 100%;
    display: block;
    flex-direction: column;
  }

  .input_side,
  .output_side {
    width: 100%;
    height: 50%;
    padding: 1rem 1rem;
  }
}

@media(max-width:820px) {
  .home {
    display: block;
    flex-direction: column;
  }

  .input_side,
  .output_side {
    width: auto;
    height: 48%;
    padding: 1rem;
    gap: 1rem;
  }
}

@media(max-width:912px) {
  .home {
    display: block;
    flex-direction: column;
  }

  .input_side,
  .output_side {
    width: auto;
    height: 48%;
    padding: 1rem;
    gap: 1rem;
  }
}
</style>
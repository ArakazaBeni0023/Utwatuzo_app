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
      ububikoAtabatuzo: [],
      ububikoBwindome: [],
    }
  },
  mounted() {
    /* var other = localStorage.getItem("ububikoBwindome")
    if (other) {
      this.ububikoBwindome = JSON.parse(other);
    } */
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
      this.ububikoAtabatuzo = this.ububikoBwindome.sort().map(mot => {
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

        for (var j = 0; j < this.ububikoAtabatuzo.length; j++) {
          if (this.ububikoAtabatuzo[j] === motsEntres[i]) {
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
    copyText() {
      navigator.clipboard.writeText(this.outPutText);
      this.afficherMessage();
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
    <div class="output_side">
      <h2>Inyishú</h2>
      <p>Ubu inyandiko zirikó ubwâtuzo bw'Ikirŭndi
      </p>
      <div class="screen">
        <button class="btnCopy" @click="copyText" v-if="outPutText.length > 0"><i class="bi bi-files"></i>
          Imura</button>
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
  height: calc(100vh - 100px);
  display: flex;
  animation: fade-in 2s;
  padding-top: 2rem;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.input_side,
.output_side {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  gap: 1rem;
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
  padding: 1rem 1rem 1rem;
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

.btnCopy {
  all: unset;
  position: absolute;
  top: 1%;
  right: 1%;
  padding: 0.6rem .5rem;
  background: rgba(0, 0, 0, 0.379);
  opacity: .5;
  border-radius: .5rem;
  cursor: pointer;
}

.btnCopy:hover {
  background: rgb(0, 0, 0);
  opacity: 1;
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
  background: rgba(0, 0, 0, 0.645);
  color: #ffffff;
  padding: 1rem;
  display: flex;
  gap: .5rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: up;
}

.message .bi-check-circle {
  color: #40e14b;
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
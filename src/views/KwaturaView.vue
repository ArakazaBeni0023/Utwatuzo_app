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
  <div class="kwatura">
    <img class="thoth" src="../assets/images/thoth-drk.png">
    <div class="input_side">
      <h3>Andika</h3>
      <p>Hajakó utwâtuzo ahó bíkenewe (wirinde gushiramwo UDUKWABU n'UTUBURUNGU)</p>
      <textarea class="textarea" v-model.trim="inPutText" placeholder="andika ng'ăha ..."></textarea>
      <button v-if="inPutText.length > 0" class="guhindura" @click="kwatura">Atura</button>
    </div>
    <div class="output_side">
      <h3>Inyishú</h3>
      <p v-if="outPutText.length > 0">Ubu inyandiko zirikó ubwâtuzo bw'Ikirŭndi</p>
      <div class="screen" @dblclick="kwimura">
        {{ outPutText }}
      </div>
    </div>
    <div v-if="messageVisible" class="message"><i class="bi bi-check-circle"></i> Vyimutse</div>
  </div>
  <NavBar />
</template>

<style scoped>
.kwatura {
  width: 100%;
  height: calc(100vh - 10%);
  position: fixed;
  display: flex;
  padding-block-start: 1rem;
  animation: fade-in .8s;
}

.thoth {
  position: absolute;
  width: auto;
  height: 100%;
  top: 0%;
  right: -40%;
  opacity: .06;
  transform: rotateY(180deg);
  z-index: -10;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  gap: .5rem;
  user-select: none;
}

h2 {
  color: #f0f5f0;
}

p {
  margin-block-start: -0.5rem;
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
  resize: none;
}

.textarea:focus {
  resize: none;
  border: 1px solid rgba(33, 158, 248, 0.428);
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
  background: rgb(25, 25, 37);
  border: 1px solid rgba(33, 158, 248, 0.428);
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
  bottom: 12%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.80);
  color: #ffffff;
  padding: 1rem;
  display: flex;
  gap: .5rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: up .5s;
  user-select: none;
  z-index: 1000;
}

.message .bi-check-circle {
  color: #2fbc38;
}

@keyframes up {
  0% {
    bottom: 0%;
  }

  100% {
    bottom: 12%;
  }
}

@media(max-width:768px) {
  .kwatura {
    width: 100%;
    height: calc(100vh - 10%);
    display: block;
    flex-direction: column;
  }

  .input_side,
  .output_side {
    width: 100%;
    height: 50%;
    padding: 1rem 1rem;
  }

  .textarea,
  .textarea:focus {
    height: 300px;
    resize: none;
  }
}

@media(min-width:600px) {
  .kwatura {
    display: flex;
    /* flex-direction: column; */
    padding-bottom: 3.5rem;
  }

  .input_side,
  .output_side {
    width: 100%;
    height: 100%;
    padding: .5rem 4rem;
    gap: .5rem;
  }

  .textarea,
  .textarea:focus {
    height: 300px;
    resize: none;
  }

  .guhindura {
    padding: .5rem 0rem;
  }

  .message {
    bottom: 17%;
  }

  @keyframes up {
    0% {
      bottom: 0%;
    }

    100% {
      bottom: 17%;
    }
  }
}
</style>
<script>
import NavBar from '../components/NavBar.vue'
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      ububikoBwindome: [],
      urutonde: [],
      term: '',
      lowerCase: true,
      upperCase: false,
      casseType: true,
      normal: true,
      active: false,
      messageVisible: false,
    }
  },
  mounted() {
    this.ububikoBwindome = this.$store.state.mots
    this.urutonde = this.ububikoBwindome.sort().map(word => word.toLowerCase());
  },
  methods: {
    filteredUrutonde(term) {
      const filteredUrutonde = this.ububikoBwindome.filter(word => {
        const wordWithoutAccents = this.removeAccents(word.toLowerCase());
        const termWithoutAccents = this.removeAccents(term.toLowerCase());
        return wordWithoutAccents.includes(termWithoutAccents);
      });
      return this.urutonde = filteredUrutonde;
    },
    removeAccents(word) {
      const accents = {
        'â': 'a',
        'à': 'a',
        'á': 'a',
        'ā': 'a',
        'ã': 'a',
        'ă': 'a',
        'ä': 'a',
        'é': 'e',
        'è': 'e',
        'ê': 'e',
        'ë': 'e',
        'ĕ': 'e',
        'ē': 'e',
        'î': 'i',
        'ï': 'i',
        'í': 'i',
        'ì': 'i',
        'ĩ': 'i',
        'ĭ': 'i',
        'ī': 'i',
        'ô': 'o',
        'ǒ': 'o',
        'ö': 'o',
        'ō': 'o',
        'ó': 'o',
        'ò': 'o',
        'õ': 'o',
        'ù': 'u',
        'ú': 'u',
        'û': 'u',
        'ŭ': 'u',
        'ü': 'u',
        'ū': 'u',
        'ũ': 'u',
      };
      return word.replace(/[âàáāãăäéèêëĕēîïíìĩĭīôǒöóòõöùúûŭüūũ]/g, match => accents[match]);
    },
    casse() {
      this.normal = !this.normal;
      this.active = !this.active;
      this.lowerCase = !this.lowerCase;
      this.upperCase = !this.upperCase;
    },
    afficherMessage() {
      this.messageVisible = true;
      setTimeout(() => {
        this.messageVisible = false;
      }, 2000);
    },
    kwimura(word) {
      navigator.clipboard.writeText(word)
        .then(() => {
          this.afficherMessage();
        });
    }
  }
}
</script>

<template>
  <div class="main-container">
    <div class="container">
      <div class="search-bar">
        <span>{{ urutonde.length }}
          <p> / </p> {{ ububikoBwindome.length }}
        </span>
        <input type="search" v-model.trim="term" placeholder="Rōndera ijāmbo..." @keyup="filteredUrutonde(term)">
        <i class="bi bi-type" v-bind:class="{ 'active': active, 'bi': normal }" @click="casse"></i>
      </div>
      <div class="words-container" v-if="urutonde.length">
        <span v-if="lowerCase">
          <div class="item" @click="kwimura(word)" v-for="word in urutonde" :key="word">{{ word.toLowerCase() }}</div>
        </span>
        <span v-if="upperCase">
          <div class="item" @click="kwimura(word.toUpperCase())" v-for="word in urutonde" :key="word">{{ word.toUpperCase()
          }}</div>
        </span>
      </div>
      <div class="not_result" v-else>
        <i class="bi bi-exclamation-circle"></i>
        <p>Iryo jāmbo ntirishobóye kubóneka!</p>
      </div>
      <div v-if="messageVisible" class="message"><i class="bi bi-check-circle"></i> Vyimutse</div>
    </div>
    <div class="navbar">
      <NavBar />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  height: 600px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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

.search-bar {
  background: #1b1b27;
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  overflow: hidden;
}

.search-bar span {
  background: #000;
  width: 20%;
  padding: .9rem 2.5rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  user-select: none;
}

.search-bar span p {
  margin-inline: .2rem;
}

.search-bar input {
  all: unset;
  width: 83%;
  padding: .8rem .5rem;
  transition: background .5s ease;
}

.search-bar input:focus {
  background: #242431;
}

.search-bar .bi {
  color: rgb(0, 149, 255);
  padding: .8rem 1rem;
  transition: background .5s ease;
  cursor: pointer;
  text-align: center;
}

.bi-type:hover:not(.active) {
  background: #242431;
}

.search-bar .active {
  background: rgb(0, 149, 255);
  color: #fff;
}

.words-container {
  width: 100%;
  height: 100%;
  background: #383849;
  border: 1px solid #383849;
  padding: .5rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  overflow: auto;
  user-select: none;
}

.words-container span {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
}

.words-container span .item {
  background: #1b1b27;
  padding: .5rem 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1 1 100px;
  transition: background .5s ease-in-out;
}

.words-container span .item:hover {
  background: #242431;
}

.not_result {
  flex-grow: 1;
  height: auto;
  text-align: center;
  padding-top: 10rem;
  color: #717178;
}

.bi-exclamation-circle {
  font-size: 3.5rem;
}

.message {
  position: fixed;
  bottom: 12%;
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
  animation: up .5s;
  user-select: none;
}

.message .bi-check-circle {
  color: #2fbc38;
}

@keyframes up {
  0% {
    opacity: 0;
    bottom: 0%;
  }

  100% {
    bottom: 12%;
    opacity: 1;
  }
}
</style>
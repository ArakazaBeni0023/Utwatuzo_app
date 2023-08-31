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
        return word.toLowerCase().includes(term.toLowerCase());
      });
      return this.urutonde = filteredUrutonde;
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
    copy() {
      this.afficherMessage();
    }
  }
}
</script>

<template>
  <div class="ububiko">
    <div class="search-bar">
      <span>{{ urutonde.length }} kurí {{ ububikoBwindome.length }}</span>
      <input type="search" v-model.trim="term" placeholder="Rōndera ijāmbo" @keyup="filteredUrutonde(term)">
      <i class="bi bi-files" @click="copy" v-if="term.length != 0"></i>
      <i class="bi bi-type" v-bind:class="{ 'active': active, 'bi': normal }" @click="casse"></i>
    </div>
    <div class="container" v-if="urutonde.length">
      <span v-if="lowerCase">
        <div class="item" v-for="word in urutonde" :key="word">{{ word.toLowerCase() }}</div>
      </span>
      <span v-if="upperCase">
        <div class="item" v-for="word in urutonde" :key="word">{{ word.toUpperCase() }}</div>
      </span>
    </div>
    <div class="not_result" v-else>
      <i class="bi bi-exclamation-circle"></i>
      <p>Iryo jāmbo ntirishobóye kubóneka!</p>
    </div>
    <div v-if="messageVisible" class="message"><i class="bi bi-check-circle"></i> Vyimutse</div>
  </div>
  <NavBar />
</template>

<style scoped>
.ububiko {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block-start: 2rem;
  padding-bottom: 5rem;
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
  padding: .9rem 1rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  font-size: 14px;
  user-select: none;
}

.search-bar input {
  all: unset;
  width: 83%;
  width: 100%;
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

.bi-files:hover {
  background: #242431;
}

.bi-type:hover:not(.active) {
  background: #242431;
}

.search-bar .active {
  background: rgb(0, 149, 255);
  color: #fff;
}

.container {
  width: 100%;
  height: 100%;
  background: #383849;
  border: 1px solid #383849;
  padding: .5rem;
  border-radius: 5px;
  overflow: auto;
}

.container span {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
}

.container span .item {
  background: #1b1b27;
  padding: .5rem 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1 1 100px;
}

.not_result {
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
  animation: up .5S;
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
    bottom: 10%;
    opacity: 1;
  }
}
</style>
<script>
import PresView from '../components/PresView.vue'
export default {
    components: {
        PresView
    },
    mounted() {
        setTimeout(() => {
            this.$router.push('/rondera');
        }, 5000);
    }
}
</script>

<template>
    <div class="kwakira">
        <PresView text="Ubwîzá bw'amajāmbo y'Íkirŭndi" />
    </div>
</template>

<style scoped>
.kwakira {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    animation: fade-in 4s;

    position: relative;
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
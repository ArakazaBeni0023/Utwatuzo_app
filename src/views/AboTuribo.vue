<script>
import PresView from '../components/PresView.vue'
export default {
    components: {
        PresView
    }
}
</script>

<template>
    <div class="aboturibo">
        <PresView text="" version="version 1.3" />
    </div>
</template>

<style scoped>
.aboturibo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    animation: fade-in 3s;
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
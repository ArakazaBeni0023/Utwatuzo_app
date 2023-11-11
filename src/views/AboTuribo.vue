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
        <PresView text="Version 1.0" />
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
    user-select: none;
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
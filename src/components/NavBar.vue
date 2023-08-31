<template>
    <nav class="menu">
        <div class="buttons">
            <router-link to="/kwatura" class="place">
                <i class="bi bi-translate"></i>
                <span>Kwâtura</span>
            </router-link>
            <router-link to="/ububiko" class="place">
                <i class="bi bi-search"></i>
                <span>Rōndera</span>
            </router-link>
            <router-link to="/insiguro" class="place">
                <i class="bi bi-save"></i>
                <span>Insiguro</span>
            </router-link>
            <router-link to="/igenamero" class="place">
                <i class="bi bi-gear"></i>
                <span>Igenamero</span>
            </router-link>
        </div>
    </nav>
</template>

<style scoped>
.menu {
    width: 92%;
    height: 60px;
    background: #1b1b27;
    border: 1px solid rgba(33, 158, 248, 0.358);
    border-radius: 5px;
    position: absolute;
    left: 4%;
    bottom: 1%;
    box-shadow: 0px 3px 9px #00000076;
    display: flex;
    user-select: none;
}

.menu .buttons {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.menu .buttons .place {
    all: unset;
    width: 50px;
    height: 50px;
    color: rgba(225, 223, 223, 0.585);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: background .5s ease;
}

.buttons .place:hover {
    /* background: rgba(8, 72, 117, 0.352); */
    cursor: pointer;
}

.buttons .place.router-link-exact-active {
    /* background: rgb(33, 158, 248); */
    color: rgb(0, 149, 255);
    transition: background .5s ease;
}

.buttons .place span {
    display: block;
}
</style>
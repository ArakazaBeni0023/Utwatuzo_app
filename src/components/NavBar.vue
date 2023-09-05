<script>
export default {
    data() {
        return {
            links: [
                {
                    'link': '/kwatura',
                    'icon': 'bi-translate',
                    'title': 'Kwâtura',
                },
                {
                    'link': '/ububiko',
                    'icon': 'bi-search',
                    'title': 'Rōndera',
                },
                // {
                //     'link': '/insiguro',
                //     'icon': 'bi-file-text',
                //     'title': 'Insiguro',
                // },
                {
                    'link': '/igenamero',
                    'icon': 'bi-gear',
                    'title': 'Igenamero',
                },
            ]
        }
    }
}
</script>

<template>
    <nav class="nav">
        <div class="buttons">
            <router-link class="place" :to="link.link" v-for="link in links" :key="link">
                <i class="bi" :class="link.icon"></i>
                <span>{{ link.title }}</span>
            </router-link>
        </div>
    </nav>
</template>

<style scoped>
.nav {
    background: rgb(27, 27, 39);
    border: 1px solid rgba(33, 158, 248, 0.428);
    width: 92%;
    position: absolute;
    left: 4%;
    bottom: 1%;
    padding: .3rem;
    border-radius: 50px;
    user-select: none;
    box-shadow: 0px 3px 9px #00000076;
    z-index: 1;
}

.nav .buttons {
    list-style-type: none;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.buttons .place {
    font-family: sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    text-decoration: none;
    color: rgba(225, 223, 223, 0.585);
    line-height: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding: 0.95em 1em;
    min-width: 50px;
    height: 50px;
    transition: 0.6s ease-in-out;
}

.buttons .place:hover {
    background: rgba(2, 61, 103, 0.432);
}

.buttons .place span {
    display: inline-block;
    overflow: hidden;
    max-width: 0;
    opacity: 0;
    transform: translate3d(-0.5em, 0, 0);
    transition: opacity 0.6s, max-width 0.6s, transform 0.6s;
    transition-timing-function: ease-in-out;
}

/* .buttons .place:hover, */
.buttons .place.router-link-exact-active {
    background: rgb(33, 158, 248);
    color: rgb(255, 255, 255);
    column-gap: 1em;
}

/* .buttons .place:hover span, */
.buttons .place.router-link-exact-active span {
    opacity: 1;
    max-width: 100px;
    transform: translate3d(0, 0, 0);
}
</style>
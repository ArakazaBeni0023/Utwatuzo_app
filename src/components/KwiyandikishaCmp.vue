<script>
export default {
    data() {
        return {
            izina: '',
            email: '',
            abantu: []
        }
    },
    method: {
        kwiyandikisha() {
            // if (this.izina.length != 0 && this.email.length != 0) {
            let user = {
                'userName': this.izina.toLocaleLowerCase(),
                'userMail': this.email
            }
            console.log(user)
            // }
        }
    }
}
</script>

<template>
    <div class="kwiyandikisha">
        <img src="../assets/images/thoth-drk.png" class="cover-drk">
        <div class="brand">
            <img src="../assets/images/logo.png" alt="logo">
            <form class="form">
                <h2>Kwiyandikisha:</h2>
                <div class="item">
                    <label for="izina">Izina:</label>
                    <input type="text" placeholder="Arakaza" id="izina" v-model.trim="izina" required>
                </div>
                <div class="item">
                    <label for="email">Email:</label>
                    <input type="email" placeholder="akarorero@gmail.com" id="email" v-model.trim="email" required>
                </div>
                <button type="submit" @click="kwiyandikisha">Iyandikishe</button>
            </form>
        </div>
        <p class="copyright">Developed & Designed by <a href="https://www.rizzova.com/" target="_blank"> Rizzova </a>
            Systems.</p>
    </div>
</template>

<style scoped>
.kwiyandikisha {
    width: 100%;
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

.cover-drk {
    position: absolute;
    width: 120%;
    left: -30%;
    bottom: 0%;
    opacity: .05;
    user-select: none;
}

.brand {
    width: 580px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    z-index: 10;
}

.brand img {
    width: 100px;
    height: auto;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, .7));
    user-select: none;
}

.brand .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.brand .form h2 {
    letter-spacing: 1px;
    user-select: none;
}

.brand .form .item {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #5e6671;
    gap: .5rem;
}

.form .item label {
    user-select: none;
}

.form .item input {
    all: unset;
    padding: 0.8rem 1rem;
    color: #5e6671;
    border: 1px solid #2b3648;
    border-radius: 5px;
    transition: background .5s ease-in-out, border .5s ease-in-out;
}

.form .item input:hover {
    background-color: #181824;
}

.form .item input:focus {
    background-color: #181824;
    border: 1px solid rgba(33, 158, 248, 0.428);
}

.form button {
    all: unset;
    background-color: rgba(33, 158, 248, 0.428);
    color: #fff;
    padding: 0.8rem 1rem;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
}

@media (max-width: 768px) {
    .brand {
        width: 290px;
    }

    .brand .form h2 {
        font-size: 20px;
    }
}
</style>
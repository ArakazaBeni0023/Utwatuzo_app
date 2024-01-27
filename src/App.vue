<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --background: #12121c;
  --light: #e8e8e8;
  --dark: #252533;
  --low-dark: #333344;
  --tr-bg: #33334455;
  --text: #81818d;
  --link: #5a5aff;
  --link-hover: #3939f9;
  --bd-color: #33558b;
  --nav-bd: #219ef86d;
  --nav-link-color: #e1dfdf95;
  --nav-link-hover: #023d6762;
  --nav-link-active: #219ef8;
}

/* scrollbar */
::-webkit-scrollbar-track {
  background-color: var(--background);
  margin: 2px;
  border-radius: .5rem;
}

::-webkit-scrollbar {
  width: .6rem;
}

::-webkit-scrollbar-thumb {
  background: var(--low-dark);
  transition: all .5s ease;
  border-radius: 50px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--low-dark);
}

@font-face {
  font-family: 'corbel';
  src: url("./assets/fonts/corbel.otf");
}

body {
  background: var(--background);
  color: var(--light);
  font-family: 'corbel';
  user-select: none;
  overflow: auto;
}

.copyright {
  all: unset;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5e6671;
  font-family: 'consolas';
  letter-spacing: 2px;
  font-size: 10px;
  bottom: 2%;

}

.copyright a {
  all: unset;
  color: rgb(32, 158, 248);
  margin-inline: 5px;
  cursor: pointer;
}

.copyright a:hover {
  text-decoration: underline;
}

@media (max-width:768px) {
  .copyright {
    font-size: 8px;
  }
}
</style>
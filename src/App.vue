<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* scrollbar */
::-webkit-scrollbar-track {
  background-color: #12121c;
  margin: 2px;
  border-radius: .5rem;
}

::-webkit-scrollbar {
  width: .6rem;
}

::-webkit-scrollbar-thumb {
  background: #252533;
  transition: all .5s ease;
  border-radius: 50px;
}

::-webkit-scrollbar-thumb:hover {
  background: #333344;
}

body {
  background: #12121c;
  color: #e8e8e8;
  font-family: 'corbel';
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
  color: rgb(33, 158, 248);
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

<template>
  <app-header></app-header>
  <router-view />
</template>

<script>
import AppHeader from '@/components/AppHeader';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}

ul {
  margin: 0;
  padding: 0;
}

li,
li a {
  text-decoration: none;
  list-style: none;
  color: inherit;
}

@media only screen and (min-width: 600px) {
  .grid_wrapper {
    display: grid;
    margin-top: 25px;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}
@media only screen and (min-width: 1000px) {
  .grid_wrapper {
    display: grid;
    margin-top: 25px;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
}
  ul{
    padding-top: 1rem;
  }

  li a {
    font-size: 20px;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
}
</style>

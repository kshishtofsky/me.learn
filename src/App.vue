<template>
  <div id="app">
    <Header/>
    <router-view/>
<!--    <Footer/>-->
  </div>
</template>

<script>
import Header from './components/Header'
// import Footer from "@/components/Footer"
import router from './router/router.js'

export default {
  name: 'App',
  router,
  components: {
    Header,
    // Footer
  }
}
</script>

<style lang="scss">
@import "./assets/mixins";

// ZEROING
body {
  margin: 0;
  padding: 0;
  background-color: #FAFAFB;
  font-family: 'Raleway', sans-serif;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}

a {
  color: black;
  text-decoration: none;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

// CONTAINER
.container {
  margin: 0 auto;
  max-width: 1464px;
  padding: 0 64px;
}

// TITLE
.title {
  margin-top: 32px;
  @include flex(center, start);
  h2 {
    font-size: 24px;
    margin-right: 8px;
  }
  h5 {
    padding-top: 4px;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
}

// MEDIA
</style>

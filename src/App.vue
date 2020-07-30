<template>
  <div id="app">
    
    <Header/>

<router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
// import Form from './components/form.vue'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'



export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import './assets/css/bootstrap.min.css'; 
@import './assets/css/main.css';
</style>

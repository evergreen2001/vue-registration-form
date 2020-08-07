<template>
  <footer>
   
    <div class="container">
      
      <div class="row">
        <div class="col-lg-6">
         <hr>

          <img :src="imglogo" class="logo img-fluid">
          
          <ul>
            <li>Press</li>
            <li>Privacy</li>
            <li>Imprint</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-lg-6"></div>
  </footer>
</template>
<script>

import logo from "../../assets/logo.png";

export default {
  data() {
    return {
      imglogo: logo
    };
  }
};
</script>
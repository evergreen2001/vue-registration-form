

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand">
      <img :src="imglogo" class="img-fluid logo" />
    </a>
    <button
      class="navbar-toggler"
      data-target="#my-nav"
      data-toggle="collapse"
      aria-controls="my-nav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="my-nav" class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active"></li>
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/jobs">Jobs</router-link>
        </li>
        <li class="nav-item">En/De</li>

        <!-- <button class="btn btn-primary">
    Request for Invite 
        </button>-->
      </ul>
    </div>
  </nav>
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
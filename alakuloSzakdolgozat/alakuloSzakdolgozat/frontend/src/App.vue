<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />

    <nav class="navbar navbar-expand-lg navbar-light">
      <a href="/">
      <img src="./assets/video/iconproba.png" alt="" />
      </a>
      

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
         

          <li class="nav-item">
            <a class="nav-link" href="/about">Rólunk</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <a class="nav-link" href="//localhost:3000/signup">Regisztráció</a>

          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            <a href="//localhost:3000/login">Bejelentkezés</a>
          </button>
        </form>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Century Gothic", Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #030303;
}

nav {
  padding: 30px !important;
  
  opacity: 0.9 !important;
  top: 0 !important;
  width: 100% !important;
  height: 50px !important;
  background-color: #0c0c0c31;
}

nav a {
  font-weight: bold;


  color: black !important;
}

nav a.router-link-exact-active {
  color: #42b983;
}
img {
  width: 50px;
  height: 50px;
  margin: 15px;
  
}
</style>



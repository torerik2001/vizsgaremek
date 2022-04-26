<template>
  <div>
    <header id="showcase">
      <video id="background-video" autoplay loop muted poster="">
  <source src="../assets/video/VideoHatter1.mp4" type="video/mp4">
</video>
      <h1>Üdvözöljük a Nagyteveli tó oldalán</h1>
      <p>
        Az oldalon sok hasznos információt olvashat tavunkról és előre bérelhet
        vagy vásárolhat a strandcikkeket!!!!!
      </p>
      <a href="/about" class="btn btn-dark">Irány a strand!</a>
    </header>
    <section id="section-a">
      <p>© - Nagyteveli tó</p>
     
    </section>
    <div>
    
  </div>
       
   
  </div>
  
</template>

/<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 17px;
  color: #926239;
  line-height: 1.6;
}

#showcase {
  
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  color: burlywood;
  text-shadow: 0px 2px 5px blue;
}

#showcase h1 {
  font-size: 50px;
  line-height: 1.2;
}

#showcase p {
  font-size: 20px;
}

#showcase .button {
  font-size: 18px;
  text-decoration: none;
  color: #926239;
  border: #926239 1px solid;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 20px;
}

#showcase .button:hover {
  background: #926239;
  color: #fff;
}

#section-a {
  padding: 20px;

  color: #fff;
  text-align: center;
}

#section-b {
  padding: 20px;
  background: #f4f4f4;
  text-align: center;
}

#section-c {
  display: flex;
}

#section-c div {
  padding: 20px;
}

#section-c .box-1,
#section-c .box-3 {
  background: #926239;
  color: #fff;
}

#section-c .box-2 {
  background: #f9f9f9;
}
#background-video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
</style>

<template>
<div id="app">
  <div id="menu">
    
    <div id="brand">
      <router-link to="/">
        <h1>Build Your Team</h1>
        <img src="/images/main_football.jpeg">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/play">
        <div class="menu-item play">
          <img src="/images/realHelmet.jpeg">
          <p>Play</p>
        </div>
      </router-link>
      <router-link to="/team">
        <div class="menu-item">
          <img src="/images/player.jpg">
          <p>My Team</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#brand a {
  color:black;
  text-decoration: none;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.play {
  margin-right: 50px;
}
</style>

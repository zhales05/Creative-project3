<template>
<div class="wrapper">
  <div class="players">
    <div class="player" v-for="player in players" :key="player.id">
      <div class="info">
        <h1>{{player.first_name}} {{player.last_name}}</h1>
        <p>{{player.College}}</p>
      </div>
      <div class="skill">
        <h2>Skill: {{player.Skill}}</h2>
        <button class="auto" v-on:click="addToTeam(player)">Add to Team</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PlayerList',
  props: {
    players: Array
  },

  computed: {

  },

  methods: {
      addToTeam(player) {
        if(this.$root.$data.team.length > 10)
        {
            alert("Exceeded player limit.");
            return;
        }
        for(var i = 0; i < this.$root.$data.team.length; i++ ){
            if(player.id == this.$root.$data.team[i].id){
                alert("Duplicate player");
                return;
            }
        }
         this.$root.$data.team.push(player);
      }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.players {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.player {
  
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.player img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.player .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  border-radius: 25px;
  background: #1d60f2;
  color: #000;
  padding: 10px 30px;
  height: 100px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.skill {
  display: flex;
}

button {
  margin-top: 5px;
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
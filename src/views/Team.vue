
<template>
<div>
<div class="headInfo">
    <h1>Overall Team Skill: {{average}} </h1>
    <h1> Total Players: {{this.$root.$data.team.length}}/11</h1>
    <div class="buttons">
        <button id="clear" v-on:click="clearTeam">Clear Team</button>
        <button id="populate" v-on:click="populateTeam">Auto-Populate Team</button>
    </div>
</div>
<div class="wrapper">
  <div class="players">
      <h2 v-if="this.$root.$data.team.length == 0">Go recruit some players!</h2>
    <div class="player" v-for="player in team" :key="player.id">
      <div class="info">
        <h1>{{player.first_name}} {{player.last_name}}</h1>
        <p>{{player.College}}</p>
      </div>
      <div class="skill">
        <h2>Skill: {{player.Skill}}</h2>
        <button class="auto" v-on:click="removeFromTeam(player)">Remove From Team</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>

export default {
  name: 'Team',
  

  computed: {
      team() {
          return this.$root.$data.team;
      },

      average(){
           var total = 0;
            for(var i = 0; i < this.$root.$data.team.length; i++) {
                  total += this.$root.$data.team[i].Skill;
                }
                 if(total == 0){
                return 0;
              }
             var avg = total/this.$root.$data.team.length;
              return avg;
      }
 },
  methods: {

    removeFromTeam(player) {
      var index = this.$root.$data.team.indexOf(player);
      if (index !== -1) {
      this.$root.$data.team.splice(index, 1);
      }
    } ,

    clearTeam(){
        this.$root.$data.team= [];
     },

      populateTeam(){
        
        for(var i = this.$root.$data.team.length; i < 11; i++){
            var win = Math.floor(Math.random() * 100);
           this.addToTeam(this.$root.$data.players[win]);
        }
     },
     
     addToTeam(player) {
        for(var i = 0; i < this.$root.$data.team.length; i++ ){
            if(player.id == this.$root.$data.team[i].id){
                 var win = Math.floor(Math.random() * 100);
                this.addToTeam(this.$root.$data.players[win]);
                return;
            }
        }
         this.$root.$data.team.push(player);
      }
  }
}
</script>

<style scoped>
#clear{
    margin-right:10px;
}
#populate {
    margin-left:10px;
}
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

.headInfo{
    text-align: center;
}
</style>
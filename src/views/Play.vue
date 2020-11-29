<template>
<div>
  <div class="headInfo">
    <h1>2020-2021 Schedule </h1>
    <h2>Overall Team Skill: {{average}} </h2>
    <h2>Win: {{this.$root.$data.W}} Loss: {{this.$root.$data.L}}</h2>
    <button id="clear" v-on:click="reset">Reset Season</button>
</div>

<div class="wrapper">
  <div class="players">
    <div class="player" v-for="team in teams" :key="team.id">
      <div class="skill">
         <h2>{{team.team_name}} {{team.nickname}}</h2>
        <button class="auto" v-on:click="playGame(team)">Play Game</button>
         <h2>{{team.result}}</h2>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>

export default {
  name: 'Play',
   components: {
  },
  data() {
    return {
    }
  },
  computed: {
    teams() {
          return this.$root.$data.scheduledTeams;
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
    playGame(team) {
      if (this.$root.$data.team.length != 11){
        alert("Team does not have 11 players")
        return;
      }
      var total = team.Skill + this.average;
      var win = Math.floor(Math.random() * total+1);
      if(win <= team.Skill){
        this.$root.$data.L++;
        team.result = "L";
      }
      else {
        this.$root.$data.W++;
         team.result = "W";
      }
      
    },

    reset(){
      for(var i = 0; i < this.$root.$data.scheduledTeams.length; i++){
          this.$root.$data.scheduledTeams[i].result = "Result: TBD";
      }
      this.$root.$data.W = 0;
      this.$root.$data.L = 0;
     // this.$forceUpdate();
    }
  }
}
</script>

<style scoped>
.headInfo{
  text-align: center;
}

.skill {
  display: flex;
}

button {
  margin-top: 5px;
  margin-left:20px;
  margin-right:20px;
  height: 50px;
  background: #000;
  color: white;
  border: none;
}
</style>
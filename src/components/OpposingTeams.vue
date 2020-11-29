<template>
<div class="wrapper">
  <div class="players">
    <div class="player" v-for="team in scheduledTeams" :key="team.id">
      <div class="info">
        <h1>{{team.team_name}} {{team.nickname}}</h1>
        
      </div>
      <div class="skill">
        <h2>Skill: {{team.Skill}}</h2>
        <button class="auto">Add to Team</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Opposing Teams',
  props: {
    scheduledTeams: Array
  },

  computed: {

  },

  methods: {
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
  height: 80px;
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
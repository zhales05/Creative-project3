import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'
//import opponents from './opponents.js'

let data = {
  players: mock,
  scheduledTeams: [
    {
      "id": 1,
      "team_name": "Sugar-Salem",
      "nickname": "Diggers",
      "Skill": 3,
      "result": "Result: TBD"
    },
    {
      "id": 2,
      "team_name": "South Fremont",
      "nickname": "Cougars",
      "Skill": 60,
      "result": "Result: TBD"
    },
    {
      "id": 3,
      "team_name": "Carolina",
      "nickname": "Panthers",
      "Skill": 30,
      "result": "Result: TBD"
    },
    {
      "id": 4,
      "team_name": "Utah",
      "nickname": "Utes",
      "Skill": 30,
      "result": "Result: TBD"
    },
    {
      "id": 5,
      "team_name": "Detriot",
      "nickname": "Pistons",
      "Skill": 50,
      "result": "Result: TBD"
    },
    {
      "id": 6,
      "team_name": "Teton",
      "nickname": "Timberwolves",
      "Skill": 37,
      "result": "Result: TBD"
    },
    {
      "id": 7,
      "team_name": "Richland",
      "nickname": "Bombers",
      "Skill": 85,
      "result": "Result: TBD"
    },
    {
      "id": 8,
      "team_name": "Inglemoor",
      "nickname": "Vikings",
      "Skill": 20,
      "result": "Result: TBD"
    },
    {
      "id": 9,
      "team_name": "Clear Lake",
      "nickname": "Falcons",
      "Skill": 80,
      "result": "Result: TBD"
    },
    {
      "id": 10,
      "team_name": "Baylor",
      "nickname": "Bears",
      "Skill": 77,
      "result": "Result: TBD"
    },
    {
      "id": 11,
      "team_name": "Las Vegas",
      "nickname": "Raiders",
      "Skill": 70,
      "result": "Result: TBD"
    },
    {
      "id": 12,
      "team_name": "London",
      "nickname": "Monarchs",
      "Skill": 88,
      "result": "Result: TBD"
    },
    {
      "id": 13,
      "team_name": "Seattle",
      "nickname": "Seahawks",
      "Skill": 95,
      "result": "Result: TBD"
    }
  ],
  team: [],
  QB: null,
  RB: null,
  WR1: null,
  WR2: null,
  WR3: null,
  TE: null,
  LT: null,
  LG: null,
  C: null,
  RG: null,
  RT: null,
  W:0,
  L:0,
}


new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
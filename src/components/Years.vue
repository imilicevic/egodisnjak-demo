<template>
  <div class="container">
    <div class="row">
      <h1>Timovi 2016./2017.</h1>
      <team v-for="team in teams" :team="team" class="teams"></team>
    </div> 
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
import Team from './Team.vue'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Godina 2016./2017.',
      teams: [
        {
          short: 'CSC',
          name: 'Case Study Competition',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, maxime.'
        },
        {
          short: 'ASC',
          name: 'App Start Contest',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, accusamus.'
        },
        {
          short: 'MCC',
          name: 'Moot Court Croatia',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, quibusdam.'
        },
        {
          short: 'IT',
          name: 'Tim za informacijske tehnologije',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, architecto.'
        }
      ]
    }
  }, 
  components: {
    Team
  }
}
</script>
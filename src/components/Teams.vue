<template>
  <div>
    <section class="hero">
      <div class="inner">
        <div class="overlay">
          <div class="hero-title">
            <h1>{{displayYear}}.</h1>
          </div>
        </div>
        <div class="scroll">
          <a href="#teams"><span class="glyphicon glyphicon-menu-down"></span></a>
        </div>
      </div>
    </section>

    <section class="teams" id="teams">
      <div class="container">
        <div class="row">
          <team v-for="team in teams" :details="team"></team>
        </div>
      </div>
    </section>
  </div>
  
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
import Team from './Team.vue'
export default {
  name: 'home',
  computed: {
    displayYear: function(){
      return String(this.year) + "./" + String(this.year+1);
    } 
  },
  data () {
    return {
      msg: 'Godina 2016./2017.',
      year: parseInt(this.$route.params.year),
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
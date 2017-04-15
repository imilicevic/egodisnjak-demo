<template>
  <div class="container">
    <div class="row">
      <h1>Timovi 2016./2017.</h1>
      <team></team>
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
      msg: 'Godina 2016./2017.'
    }
  }, 
  components: {
    Team
  }
}
</script>
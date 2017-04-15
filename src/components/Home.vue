<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <h1>{{ msg }}</h1>
        <router-link to="/years">Timovi u godini</router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Godina 2016./2017.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

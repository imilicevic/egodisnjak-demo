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

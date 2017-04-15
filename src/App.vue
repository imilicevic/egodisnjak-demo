<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsed-navbar" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <i class="glyphicon glyphicon-menu-hamburger"></i>
          </button>
          <router-link to="/" class="navbar-brand"><strong>eGodišnjak</strong></router-link>
         
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="collapsed-navbar">
          <ul class="nav navbar-nav">
            <li><router-link to="/">Početna</router-link></li>
            <li><router-link to="/years">Godine</router-link></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container -->
    </nav>      
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>

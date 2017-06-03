<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import * as NavigationComponent from './components/Navigation.vue'; 
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components: {
    'navigation': NavigationComponent
  }
}
</script>

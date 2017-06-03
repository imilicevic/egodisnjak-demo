<template>
  <div class="col-md-3">
    <div class="card">
      <h2>{{ details.short }}</h2>
      <p><strong>Puni naziv:</strong> {{ details.name }} </p>
      <p><strong>Broj članova: </strong>14</p>
      <div class="description">
        {{ details.desc }}
      </div>
      <router-link :to="{name: 'Members', params: {year: '2016', team: details.short }}" class="btn btn-primary">Detalji</router-link>
    </div> 
  </div>    
</template>
<script>
  export default {
    props: ['details']
  }
</script>
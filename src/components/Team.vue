<template>
  <div class="col-md-3">
    <div class="card">
      <h2>{{ team.short }}</h2>
      <p><strong>Puni naziv:</strong> {{ team. name }} </p>
      <p><strong>Broj članova: </strong>14</p>
      <div class="description">
        {{ team.desc }}
      </div>
    </div> 
  </div>
</template>
<script>
  export default {
    props: ['team']
  }
</script>
<template>
  <div class="col-md-3 col-sm-6 team-item">
    <a href="#" data-toggle="modal" data-target="#profileModal">
      <img :src="details.image" alt="">
      <div class="hidden-info">
        <div class="valign-bottom">
          <h3>{{details.name}}</h3>
          <div class="team-name">{{details.team}}</div>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
  export default {
    props: ['details']
  }
</script>
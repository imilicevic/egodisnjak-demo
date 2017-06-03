<template>
<div>
  <section class="hero">
    <div class="inner">
      <div class="overlay">
        <div class="team-hero">
          <h1>{{team.name}}</h1>
          <div class="team-description">
            {{team.description}}
          </div>
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
        <member v-for="member in members" :details="member"></member>
        <div class="col-md-6 col-sm-12 team-desc">
          <h3>Međunarodni odnosi</h3>
          <div class="team-name">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae commodi voluptate neque non voluptatem pariatur tempora esse quis. Dolore officiis officia amet magni, deserunt blanditiis voluptas neque nemo. Optio natus minus, ipsam maiores aperiam quaerat libero, numquam perspiciatis inventore quos sapiente culpa tenetur. Doloribus, consequuntur asperiores iste repellendus magni reprehenderit sed dicta, accusamus officia, culpa, libero qui accusantium magnam esse non! Ipsum quasi atque adipisci cum amet saepe. Maiores, necessitatibus.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Member from './Member.vue' 
export default {
  data () {
    return {
      team: {
        name: "Case Study Competition",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sunt?"
      },
      members: [
        {
          image: 'static/img/girl.png',
          name: 'Ana Anić',
          team: 'Case Study Competition'
        },
        {
          image: 'static/img/boy.png',
          name: 'Marko Perić',
          team: 'Case Study Competition'
        },
        {
          image: 'static/img/girl.png',
          name: 'Ana Anić',
          team: 'Case Study Competition'
        },
        {
          image: 'static/img/boy.png',
          name: 'Tomislav Nikić',
          team: 'Case Study Competition'
        },
      ]
    }
  }, 
  components: {
    Member
  }, 
  methods:{
    fetchMembers (){
      axios.get('api/v1/teams/' + team_id + '/users')
        .then((response) => {
          return response.data;
      });
    }
  }
}

</script>
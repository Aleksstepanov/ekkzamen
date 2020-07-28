<template>
  <div>
    <h2>Выберете тему для экзамена</h2>
    <hr>
    <ul>
    <li v-for="elem in returnName" :key="elem.id" v-on:click="ThemeClick">
      <div class="elemList">
        <p>{{ elem.name }}</p>
        <router-link :to="{ name: 'Ekzamen', params: { id: elem.id }}"
          class="btn waves-effect waves-light btn-small blue lighten-3"
        >
          <i class="material-icons right">send</i>
        </router-link>
      </div>
    </li>
  </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import ekz from '@/components/ekz.vue';

export default {
  name: 'ekzList',
  components: {
    // ekz,
  },
  computed: mapGetters(['returnName']),
  methods: {
    ...mapActions(['BeginTest']),
    ThemeClick() {
      this.BeginTest();
    },
  },
};
</script>

<style lang="scss" scoped>
  h2 {
    text-align: center;
  }
  ul {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  li {
    display: flex;
    flex-direction: row;
    max-width: 400px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .elemList {
    display: flex;
    flex-direction: row;
    max-width: 400px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #ccc;
  }
</style>

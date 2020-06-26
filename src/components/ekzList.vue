<template>
  <ul>
    <h2>Выберете тему для экзамена</h2>
    <hr>
    <li>
      <p>{{ returnFundOfInd }}</p>
      <a class="btn waves-effect waves-light btn-small blue lighten-3">
        <i class="material-icons right">send</i>
      </a>
    </li>
    <li>
      <p>{{ returnSafetyName }}</p>
      <a class="btn waves-effect waves-light btn-small blue lighten-3">
        <i class="material-icons right">send</i>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ekzList',
  computed: mapGetters(['returnFundOfInd', 'returnSafetyName']),
};
</script>

<style lang="scss" scoped>
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
</style>

<template>
  <div class="home">
    <ekzList />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import ekzList from '@/components/ekzList.vue';

export default {
  name: 'Home',
  components: {
    ekzList,
  },
};
</script>

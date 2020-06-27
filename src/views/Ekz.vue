<template>
  <div>
    {{returnName.filter(item => item.id === id)}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Ekz',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    test() {
      console.log(this.id);
    },
  },
  computed: mapGetters(['returnName']),
};
</script>

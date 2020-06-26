<template>
  <div>
    {{ id }}
    <a v-on:click="test">Click me!</a>
  </div>
</template>

<script>
export default {
  name: 'Ekz',
  props: {
    id: {
      type: Number,
      // required: true,
    },
  },
  methods: {
    test() {
      console.log(this.id);
    },
  },
};
</script>

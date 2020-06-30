<template>
  <div class="container">
      <h4>
        {{ Questions.title }}
      </h4>
    <ul>
      <li v-for="(elem, index) of Questions.answer" :key="elem.key">
      <label>
        <input name="answer" type="radio" v-bind:value="index"/>
        <span>{{elem.title}}</span>
      </label>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    Questions: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
 .container {

 }
</style>

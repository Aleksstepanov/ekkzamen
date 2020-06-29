<template>
  <div class="container">
      <h4>
        {{ returnQuestionTitle }}
      </h4>
    <ul>
      <li v-for="elem in returnAnswerArray" :key="elem.title">
      <label>
        <input name="answer" type="radio"/>
        <span>{{elem.title}}</span>
      </label>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['Question'],
  computed: {
    returnQuestion() {
      return this.Question;
    },
    returnQuestionTitle() {
      return this.returnQuestion[0].title;
    },
    returnAnswerArray() {
      console.log(this.returnQuestion);
      return this.returnQuestion[0].answer;
    },
  },
};
</script>

<style lang="scss" scoped>
 .container {

 }
</style>

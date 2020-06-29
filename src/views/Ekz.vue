<template>
  <div>
    <h2>{{ returnNameTheme }}</h2>
    <hr>
    <EkzItem v-bind:Question="returnQuestions"/>
    <button class="btn waves-effect waves-light"
            type="submit" name="action" v-on:click="ReplyClick">
            Reply
      <i class="material-icons right">send</i>
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EkzItem from '@/components/EkzItem.vue';

export default {
  name: 'Ekz',
  components: {
    EkzItem,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['returnName']),
    returnQuestionsId() {
      return this.returnName.filter((item) => item.id === this.id);
    },
    returnNameTheme() {
      return this.returnQuestionsId[0].name;
    },
    returnQuestions() {
      const Questions = this.returnQuestionsId[0].questions;
      return Questions;
    },
  },
  methods: {
    ReplyClick() {
      this.EkzItem.render();
    },
  },
};
</script>

<style lang="scss" scoped>
 h2 {
   text-align: center;
 }
</style>

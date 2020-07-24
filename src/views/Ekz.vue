<template>
  <div>
    <h2>{{ returnName[id-1].name }}</h2>
    <hr>
    <EkzItem v-bind:Questions="returnName[id-1].questions[returnCount]"
    v-on:AnswerChecked="AnswerChecked"
    />
    <div class="buttons">
      <button class="btn waves-effect waves-light"
              type="submit" name="action" v-on:click="ReplyClick">
              Reply
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
  data() {
    return {
      value: Number,
      EndQuestions: false,
    };
  },
  computed: {
    ...mapGetters(['returnName', 'returnResult', 'returnListQuestions']),
    returnCount() {
      return this.returnResult.count;
    },
    ListQuestions() {
      return this.returnListQuestions.filter((item) => item.id === this.id);
    },
  },
  methods: {
    ...mapActions(['Reaply']),
    ReplyClick() {
      const answer = {
        title: this.ListQuestions[this.returnCount].title,
      };
      if (this.returnName[this.id - 1].questions.length > this.returnResult.count + 1) {
        this.Reaply(answer);
      } else this.EndQuestions = true;
    },
    AnswerChecked(value) {
      this.value = value;
    },
  },
};
</script>

<style lang="scss" scoped>
 h4, h2 {
   text-align: center;
 }
 .buttons {
   display: flex;
   justify-content: space-around;
 }
</style>

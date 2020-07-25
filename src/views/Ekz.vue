<template>
  <div>
    <h2>{{ returnName[id-1].name }}</h2>
    <hr>
    <template v-if="returnResult.count <= returnName[id-1].questions.length - 1">
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
    </template>
    <template v-else>
      <h3>Экзамен завершен</h3>
      <p>Вы ответили правильно на следующее количество вопросов:
        {{returnResult.answer.filter((item) => item.result).length}}
      </p>
    </template>
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
      const question = this.returnListQuestions[this.id - 1].questions[this.returnCount];
      const answer = {
        title: question.title,
        answerUser: question.answer[this.value].title,
        answerResult: question.answer.filter((item) => item.result)[0].title,
        result: question.answer[this.value].result,
      };
      console.log(answer.result);
      this.Reaply(answer);
    },
    AnswerChecked(value) {
      this.value = value;
    },
  },
};
</script>

<style lang="scss" scoped>
 h4, h2, h3, p {
   text-align: center;
 }
 .buttons {
   display: flex;
   justify-content: space-around;
 }
</style>

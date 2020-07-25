<template>
  <div>
    <h3>Экзамен завершен</h3>
      <p>Вы ответили правильно на следующее количество вопросов:
        {{returnResult.answer.filter((item) => item.result).length}}
      </p>
      <ul class="collapsible">
        <li v-for="item in Result.answer" :key="item.title">
          <div class="collapsible-header" v-if="!item.result">
            <i class="material-icons">cancel</i>
              {{ item.title }}
          </div>
          <ul class="collapsible-body">
            <li>
              <span class="pink-text text-darken-1">
                {{ item.answerUser }}
              </span>
            </li>
            <li>
              <span class="teal-text text-lighten-1">
                {{ item.answerResult }}
              </span>
            </li>
          </ul>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ResultScreen',
  props: {
    Result: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['returnResult']),
  },
  mounted() {
    // eslint-disable-next-line no-undef
    M.AutoInit();
  },
};
</script>

<style lang="scss" scoped>
  div {
    text-align: center;
  }
</style>

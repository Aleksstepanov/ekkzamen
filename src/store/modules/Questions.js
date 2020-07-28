import FundamentalOfIndustrialSafety from './theme/FundamentalOfIndustrialSafety';
import PTB from './theme/PTB';
import Result from './Result';

export default {
  state: {
    Result,
    list: [
      FundamentalOfIndustrialSafety, // Основы Промышленной безопасности
      PTB, // Правила техники безопасности
    ],
  },
  mutations: {
    createAnswer(state, answer) {
      const newAnswer = {
        title: answer.title,
        answerUser: answer.answerUser,
        answerResult: answer.answerResult,
        result: answer.result,
      };
      state.Result.answer.push(newAnswer);
      state.Result.count += 1;
    },
    shuffle(state) {
      // eslint-disable-next-line no-plusplus
      for (let i = state.questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.questions[i], state.questions[j]] = [state.questions[j], state.questions[i]];
      }
    },
    clearResult(state) {
      state.Result.title = '';
      state.Result.answer = [];
      state.Result.count = 0;
    },
  },
  actions: {
    Reaply(ctx, answer) {
      ctx.commit('createAnswer', answer);
    },
    BeginTest(ctx) {
      ctx.commit('clearResult');
    },
  },
  getters: {
    returnName(state) {
      const result = [];
      state.list.forEach((item) => result.push(item));
      return result;
    },
    returnNumberOfQuestion(state) {
      return state.list.length;
    },
    returnResult(state) {
      return state.Result;
    },
    returnListQuestions(state) {
      return state.list;
    },
  },
};

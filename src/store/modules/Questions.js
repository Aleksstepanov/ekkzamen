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
        result: this.answerUser === this.answerResult,
      };
      state.Result.count += 1;
      state.Result.answer.push(newAnswer);
    },
  },
  actions: {
    Reaply(ctx, answer) {
      ctx.commit('createAnswer', answer);
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
  },
};

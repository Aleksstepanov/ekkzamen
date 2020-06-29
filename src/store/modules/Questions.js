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
  },
  actions: {
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
  },
};

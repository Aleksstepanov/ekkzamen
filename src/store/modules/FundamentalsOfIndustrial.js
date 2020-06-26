export default {
  state: {
    name: 'Основы промышленной безопасности',
    list: [
      {
        id: 1,
        question: 'Вопрос',
        ansver1: 'Ответ 1',
        ansver2: 'Ответ 2',
        ansver3: 'Ответ 3',
        ansver4: 'Ответ 4',
        //  result: this.ansver2,
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    returnFundOfInd(state) {
      return state.name;
    },
  },
};

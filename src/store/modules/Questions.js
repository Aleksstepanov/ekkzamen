export default {
  state: {
    list: [
      {
        id: 1,
        name: 'Промышленная безопасность',
        questions: [
          {
            id: 1,
            title: 'Вопрос 1',
            answer1: { title: 'Ответ 1', result: false },
            answer2: { title: 'Ответ 2', result: false },
            answer3: { title: 'Ответ 3', result: false },
            answer4: { title: 'Ответ 4', result: true },
          },
          {
            id: 2,
            title: 'Вопрос 2',
            answer1: { title: 'Ответ 1', result: false },
            answer2: { title: 'Ответ 2', result: false },
            answer3: { title: 'Ответ 3', result: false },
            answer4: { title: 'Ответ 4', result: true },
          },
        ],
      },
      {
        id: 2,
        name: 'Правила техники безопасности',
        questions: [
          {
            id: 1,
            title: 'Вопрос 1',
            answer1: { title: 'Ответ 1', result: false },
            answer2: { title: 'Ответ 2', result: false },
            answer3: { title: 'Ответ 3', result: false },
            answer4: { title: 'Ответ 4', result: true },
          },
        ],
      },
      {
        id: 3,
        name: 'ПТЭ',
        questions: [
          {
            id: 1,
            title: 'Вопрос 1',
            answer1: { title: 'Ответ 1', result: false },
            answer2: { title: 'Ответ 2', result: false },
            answer3: { title: 'Ответ 3', result: false },
            answer4: { title: 'Ответ 4', result: true },
          },
        ],
      },
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

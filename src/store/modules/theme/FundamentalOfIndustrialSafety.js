// Fundamental of Industrial safety
// list of questions
// Основы промышленной безопасности
// Список вопросов

export default {
  id: 1,
  name: 'Промышленная безопасность',
  questions: [
    {
      count: 1,
      title: 'Какие нормативные документы не могут приниматься по вопросам промышленной безопасности?',
      answer: [
        { title: 'Федеральные законы', result: false },
        { title: 'Нормативные правовые акты Правительства Российской Федерации', result: false },
        { title: 'Нормативные правовые акты Президента Российской Федерации', result: false },
        { title: 'Нормативные правовые акты субъектов Российской Федерации', result: true },
      ],
    },
    {
      count: 2,
      title: 'Вопрос 2',
      answer: [
        { title: 'Ответ 1', result: false },
        { title: 'Ответ 2', result: false },
        { title: 'Ответ 3', result: false },
        { title: 'Ответ 4', result: true },
      ],
    },
  ],
};

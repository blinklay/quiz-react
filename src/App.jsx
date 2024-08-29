import { useEffect, useState } from "react";
import QuizBody from "./components/QuizBody/QuizBody";

const questions = [
  {
    id: 1,
    questionText: "Какой город является столицей России?",
    answerOptions: [
      { letter: "a", answerText: "Москва", isCorrect: true },
      { letter: "b", answerText: "Санкт-Петербург", isCorrect: false },
      { letter: "c", answerText: "Новосибирск", isCorrect: false },
    ],
  },
  {
    id: 2,
    questionText: "Какое самое большое озеро в мире?",
    answerOptions: [
      { letter: "a", answerText: "Байкал", isCorrect: false },
      { letter: "b", answerText: "Каспийское море", isCorrect: true },
      { letter: "c", answerText: "Виктория", isCorrect: false },
    ],
  },
  {
    id: 3,
    questionText: "Какая планета ближе всего к Солнцу?",
    answerOptions: [
      { letter: "a", answerText: "Венера", isCorrect: false },
      { letter: "b", answerText: "Меркурий", isCorrect: true },
      { letter: "c", answerText: "Земля", isCorrect: false },
    ],
  },
  {
    id: 4,
    questionText:
      "Какой элемент обозначается символом 'O' в таблице Менделеева?",
    answerOptions: [
      { letter: "a", answerText: "Азот", isCorrect: false },
      { letter: "b", answerText: "Кислород", isCorrect: true },
      { letter: "c", answerText: "Водород", isCorrect: false },
    ],
  },
  {
    id: 5,
    questionText: "Как называется самое высокое здание в мире?",
    answerOptions: [
      { letter: "a", answerText: "Эйфелева башня", isCorrect: false },
      { letter: "b", answerText: "Шанхайская башня", isCorrect: false },
      { letter: "c", answerText: "Бурдж-Халифа", isCorrect: true },
    ],
  },
  {
    id: 6,
    questionText: "Какая страна известна своей фьордами?",
    answerOptions: [
      { letter: "a", answerText: "Швеция", isCorrect: false },
      { letter: "b", answerText: "Исландия", isCorrect: false },
      { letter: "c", answerText: "Норвегия", isCorrect: true },
    ],
  },
  {
    id: 7,
    questionText: "Какой океан самый большой по площади?",
    answerOptions: [
      { letter: "a", answerText: "Атлантический", isCorrect: false },
      { letter: "b", answerText: "Тихий", isCorrect: true },
      { letter: "c", answerText: "Индийский", isCorrect: false },
    ],
  },
  {
    id: 8,
    questionText: "Какая страна первая запустила человека в космос?",
    answerOptions: [
      { letter: "a", answerText: "США", isCorrect: false },
      { letter: "b", answerText: "СССР", isCorrect: true },
      { letter: "c", answerText: "Китай", isCorrect: false },
    ],
  },
  {
    id: 9,
    questionText: "Какая планета известна как 'Красная планета'?",
    answerOptions: [
      { letter: "a", answerText: "Юпитер", isCorrect: false },
      { letter: "b", answerText: "Марс", isCorrect: true },
      { letter: "c", answerText: "Сатурн", isCorrect: false },
    ],
  },
  {
    id: 10,
    questionText: "Какая гора является самой высокой в мире?",
    answerOptions: [
      { letter: "a", answerText: "Эверест", isCorrect: true },
      { letter: "b", answerText: "К2", isCorrect: false },
      { letter: "c", answerText: "Килиманджаро", isCorrect: false },
    ],
  },
  {
    id: 11,
    questionText: "Какая страна изобрела пиццу?",
    answerOptions: [
      { letter: "a", answerText: "Италия", isCorrect: true },
      { letter: "b", answerText: "Франция", isCorrect: false },
      { letter: "c", answerText: "Греция", isCorrect: false },
    ],
  },
  {
    id: 12,
    questionText: "Какое животное является символом WWF?",
    answerOptions: [
      { letter: "a", answerText: "Тигр", isCorrect: false },
      { letter: "b", answerText: "Слон", isCorrect: false },
      { letter: "c", answerText: "Панда", isCorrect: true },
    ],
  },
  {
    id: 13,
    questionText: "Какое произведение написал Лев Толстой?",
    answerOptions: [
      { letter: "a", answerText: "Преступление и наказание", isCorrect: false },
      { letter: "b", answerText: "Война и мир", isCorrect: true },
      { letter: "c", answerText: "Мастер и Маргарита", isCorrect: false },
    ],
  },
  {
    id: 14,
    questionText: "Какой газ является основным компонентом земной атмосферы?",
    answerOptions: [
      { letter: "a", answerText: "Кислород", isCorrect: false },
      { letter: "b", answerText: "Азот", isCorrect: true },
      { letter: "c", answerText: "Углекислый газ", isCorrect: false },
    ],
  },
  {
    id: 15,
    questionText: "Какой континент самый холодный?",
    answerOptions: [
      { letter: "a", answerText: "Евразия", isCorrect: false },
      { letter: "b", answerText: "Антарктида", isCorrect: true },
      { letter: "c", answerText: "Северная Америка", isCorrect: false },
    ],
  },
  {
    id: 16,
    questionText: "Какой самый длинный день в году?",
    answerOptions: [
      { letter: "a", answerText: "21 декабря", isCorrect: false },
      { letter: "b", answerText: "1 января", isCorrect: false },
      { letter: "c", answerText: "21 июня", isCorrect: true },
    ],
  },
  {
    id: 17,
    questionText: "Какое животное известно как 'Царь зверей'?",
    answerOptions: [
      { letter: "a", answerText: "Тигр", isCorrect: false },
      { letter: "b", answerText: "Лев", isCorrect: true },
      { letter: "c", answerText: "Медведь", isCorrect: false },
    ],
  },
  {
    id: 18,
    questionText: "Какой элемент таблицы Менделеева самый легкий?",
    answerOptions: [
      { letter: "a", answerText: "Кислород", isCorrect: false },
      { letter: "b", answerText: "Гелий", isCorrect: false },
      { letter: "c", answerText: "Водород", isCorrect: true },
    ],
  },
  {
    id: 19,
    questionText: "Как называется самая длинная река в мире?",
    answerOptions: [
      { letter: "a", answerText: "Амазонка", isCorrect: true },
      { letter: "b", answerText: "Нил", isCorrect: false },
      { letter: "c", answerText: "Миссисипи", isCorrect: false },
    ],
  },
  {
    id: 20,
    questionText: "Какой город был разрушен извержением Везувия?",
    answerOptions: [
      { letter: "a", answerText: "Рим", isCorrect: false },
      { letter: "b", answerText: "Помпеи", isCorrect: true },
      { letter: "c", answerText: "Неаполь", isCorrect: false },
    ],
  },
  {
    id: 21,
    questionText:
      "Какой химический элемент используется для создания атомных бомб?",
    answerOptions: [
      { letter: "a", answerText: "Уран", isCorrect: true },
      { letter: "b", answerText: "Гелий", isCorrect: false },
      { letter: "c", answerText: "Железо", isCorrect: false },
    ],
  },
];

function getRandomQuestion(questions) {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    const randomId = Math.floor(Math.random() * (questions.length - 1));
    arr.push(questions[randomId]);
  }
  let count = 1;
  return arr.map((item) => {
    return {
      ...item,
      id: count++,
    };
  });
}

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [countSuccess, setCountSuccess] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState(
    getRandomQuestion(questions)
  );

  const getAnswer = (isCurrent) => {
    if (isCurrent) setCountSuccess((prev) => prev + 1);
    if (currentQuestion >= currentQuestions.length) {
      setIsEnd(true);
    }
    setCurrentQuestion((prev) => prev + 1);
  };

  const resetGame = () => {
    setCurrentQuestions(getRandomQuestion(questions));
  };

  useEffect(() => {
    setCurrentQuestion(1);
    setCountSuccess(0);
    setIsEnd(false);
  }, [currentQuestions]);

  return (
    <div className="App">
      <QuizBody
        getAnswer={getAnswer}
        questions={currentQuestions}
        currentQuestion={currentQuestion}
        isEnd={isEnd}
        countSuccess={countSuccess}
        resetGame={resetGame}
      />
    </div>
  );
}

export default App;

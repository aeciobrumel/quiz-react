import type { Question } from "../types/Question";

export const questions: Question[] = [
  {
    question: 'Qual dessas afirmações é falsa sobre a Grande Muralha da China?',
    options: [
      'Pode ser vista da Lua a olho nu',
      'Tem mais de 20 mil km de extensão',
      'Foi construída para defesa militar',
      'É Patrimônio Mundial da UNESCO',
    ],
    answer: 0,
  },
  {
    question: 'Qual dessas curiosidades sobre animais é verdadeira?',
    options: [
      'Tubarões respiram pelo nariz',
      'Polvos têm três corações',
      'Gatos enxergam em cores vivas',
      'Pinguins voam pequenas distâncias',
    ],
    answer: 1,
  },
  {
    question: 'Qual dessas opções é um mito sobre o cérebro humano?',
    options: [
      'Usamos apenas 10% do cérebro',
      'O cérebro consome muita energia',
      'Sonhar é uma atividade cerebral',
      'O cérebro é formado por bilhões de neurônios',
    ],
    answer: 0,
  },
  {
    question: 'Qual dessas bebidas é a segunda mais consumida no mundo?',
    options: [
      'Refrigerante',
      'Suco de laranja',
      'Café',
      'Chá mate',
    ],
    answer: 2,
  },
  {
    question: 'Qual dessas afirmações sobre raios está correta?',
    options: [
      'Um raio nunca cai duas vezes no mesmo lugar',
      'A maioria dos raios ocorre no oceano',
      'Raios só caem durante tempestades com trovão',
      'O raio pode atingir o mesmo lugar várias vezes',
    ],
    answer: 3,
  },
];

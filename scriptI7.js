// 7.1
const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];
const score = exams.reduce((acc, alum) => acc + alum.score, 0);
console.log(score);

// 7.2
const scoreA = exams.reduce((acc, alum) => {
  if (alum.score >= 5) {
    return acc + alum.score;
  }
  return acc;
}, 0);
console.log(scoreA);

// 7.3
const average = exams.reduce((acc, alum, index) => {
  if (exams.length -1 === index) {
    return (acc + alum.score) / exams.length;
  }
  return acc + alum.score;
}, 0);
console.log(average);

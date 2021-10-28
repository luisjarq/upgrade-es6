// 4.1
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const usersN = users.map((u) => u.name);
console.log(usersN);

// 4.2
const users2 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const usersM = users2.map((u) => {
  if (u.name.startsWith("A")) {
    return "Anacleto";
  }
  return u.name;
});
console.log(usersM);

// 4.3
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];
const cityNames = cities.map((c) => {
    if (c.isVisited) {
        return `${c.name}  (Visitado)`;
    }
    return c.name;
});
console.log(cityNames);
// 3.1
const pointsList = [32, 54, 21, 64, 75, 43];
const [...points] = pointsList;
const pointsListCopy = [...pointsList];
console.log(points);
console.log(pointsListCopy);

//3.2
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyCopy = { ...toy };
console.log(toy);
console.log(toyCopy);

// 3.3
const pointsList3 = [32, 54, 21, 64, 75, 43];
const pointsLis32 = [54, 87, 99, 65, 32];
const array = [...pointsList3, ...pointsLis32];
console.log(array);

// 3.4
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
const [first, , ...rest] = colors;
const colorsCopy = [first, ...rest];
console.log(colorsCopy);


// 5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const agesUp = ages.filter((a) => a > 18);
console.log(agesUp);

// 5.2
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const agesEven = ages2.filter((a) => a % 2 === 0);
console.log(agesEven);

// 5.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const lOl = streamers.filter(s=> s.gameMorePlayed ==='League of Legends');
console.log(lOl);

// 5.4
const u = streamers.filter(s=> s.name.includes('u'));
console.log(u);

// 5.5
const legends = streamers.filter(s=> s.gameMorePlayed.includes('Legends'));
console.log(legends);

// 5.6
document.querySelector("input").addEventListener("input",filter);
function filter(event){    
    console.log(streamers.filter(s=> s.name.includes(event.target.value)).map(n=> n.name));
};

// 5.7
document.querySelector("button").addEventListener("click",filter);
function filter(event){ 
    let input = document.querySelector("input")   
    console.log(streamers.filter(s=> s.name.includes(input.value)).map(n=> n.name));
};
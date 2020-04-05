let umaString = "Uma \"String\"";
let outraString = "Outra \\String";
let stringIndex = 'Isso é apenas um teste.';

console.log(umaString);
console.log(outraString);
console.log(stringIndex[0]);
console.log(stringIndex.charAt(10));
console.log(stringIndex.indexOf('apenas'));
console.log(stringIndex.match(/[a-z]/g));
console.log(stringIndex.search(/t/));
console.log(stringIndex.replace('teste', 'goiaba'));
console.log(stringIndex.slice(5, 6));
console.log(stringIndex.slice(-5, -1));
console.log(stringIndex.split(' '));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
// practica obligatoria 1
const uniqueWorlds=new Set(worlds);

const list = [...uniqueWorlds].sort().reverse();

alert('listado de palabras ordenadas:' + list.join(', '));

// practica 2

const wordCount = new Map();
worlds.forEach(word => {
  wordCount.set(word, (wordCount.get(word) || 0) + 1);
});

let resultString = '';
for (const [word, count] of wordCount) {
  resultString += `${word}: ${count}\n`;
}
alert(resultString);

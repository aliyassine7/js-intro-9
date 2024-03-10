const sentences = ['Good morning', 'I like arrays', 'It is Sunday'];

// each sentence's first word -> ['Good', 'I', 'It'];
/*
Solution with loops

const newArr = [];

for(const sentence of sentences) {
    // newArr.push(sentence.split(' ')[0]);
    newArr.push(sentence.slice(0, sentence.indexOf(' ')));
}
*/

// Solution with map() method

// const newArr = sentences.map(function (sent) {
//     return sent.split(' ')[0]
// });

const newArr = sentences.map(x => x.split(' ')[0]);

console.log(sentences);
console.log(newArr);


// each sentence's last word -> ['morning', 'arrays', 'Sunday'];

const lastWords = sentences.map(senetnce => senetnce.split(' ').at(-1));
// const lastWords = sentences.map(senetnce => senetnce.slice(senetnce.lastIndexOf(' ') + 1));
// const lastWords = sentences.map(senetnce => senetnce.split(' ').slice(-1)).flat();
// const lastWords = sentences.map(senetnce => senetnce.split(' ').pop());

console.log(lastWords);
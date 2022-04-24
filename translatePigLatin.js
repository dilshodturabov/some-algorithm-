function translatePigLatin(str) {
    let vowels = /[aioue]/gi;

    if (str[0].match(vowels) !== null) {
        return str + 'way';
    } else {
        for (let i of str) {
            let finderOfVowels = str.match(vowels);
            if (finderOfVowels === null) {
                return str + 'ay';
            }
        }
        let firstItem = str.match(vowels)[0];
        let position = 0;
        let counter = 0;

        for (let i = 0; i <= str.length; i++) {
            if (str[i] !== firstItem)
                counter++;
            if (str[i] === firstItem) {
                position = i;
                return str.slice(position) + str.slice(0, counter) + 'ay';
            }
        }
    }
}
console.log(translatePigLatin('glove'));




// let word = 'rrhythm';

// for (let i = 0; i <= word.length; i++) {
//     console.log(word[i].match(/[aioue]/g));
// }
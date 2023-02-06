"use strict";
function simpleString(initialState) {
    let val = initialState;
    return [
        () => val,
        (v) => val = v
    ];
}
const [stringgetter, stringsetter] = simpleString("Hello");
console.log(stringgetter());
stringsetter("Yolo");
console.log(stringgetter());
const [str2inggetter, str2ingsetter] = simpleString(null);
console.log(str2inggetter());
str2ingsetter("Hello");
console.log(str2inggetter());
function Ranker(items, rank) {
    const ranks = items.map(item => ({
        item,
        rank: rank(item)
    }));
    ranks.sort((a, b) => a.rank - b.rank);
    return ranks.map(rank => rank.item);
}
const pokemon = [{ name: "Balbasaur", hp: 20 }, { name: "Pikachu", hp: 5 }, { name: "Charizard", hp: 90 }];
const ranks = Ranker(pokemon, ({ hp }) => hp);
console.log(ranks);

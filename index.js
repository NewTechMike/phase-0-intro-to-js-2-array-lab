// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    //const cats =[];
    return cats.push("Ralph");
}

function destructivelyPrependCat(name){
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
}

function prependCat(name){
    const newCats = [...cats];
    newCats.unshift("Arnold");
    return newCats;
}

function removeLastCat(){
    const newCats = [...cats];
    newCats.pop();
    return newCats;
}

function removeFirstCat(){
    const newCats = [...cats];
    newCats.shift();
    return newCats;
}
/*  removes the first cat from the cats 
array and returns a new array, leaving the cats 
array unchanged:*/

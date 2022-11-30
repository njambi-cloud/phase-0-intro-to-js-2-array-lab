// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
console.log (cats);

//push() used to add an item to the end of an array
function destructivelyAppendCat(name){
    cats.push('Ralph');
}
function destructivelyPrependCat (){
    cats.unshift('Bob');
}
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');


function destructivelyRemoveLastCat(){
    cats.pop();
}
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');


function destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name){
    let copyOfCat = [...cats, "Broom"]
    return copyOfCat
}
function prependCat(name){
    let prepEnd = ["Arnold", ...cats]
    return prepEnd
}

function removeLastCat(){
    let removeLast = cats.slice(0,2)
    return removeLast

}
function removeFirstCat(){
    let removeFirst = cats.slice(1)
    return removeFirst

}


// Write your solution here!

let cats=["Milo","Otis","Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop();
    

}
function destructivelyRemoveFirstCat(name){
    cats.shift();
}
function appendCat(catName){
    let newArray=cats.concat(catName);
    return newArray;
}
function prependCat(catName){
    let newArray=[catName,...cats];
    return newArray;
}
function removeLastCat(){
    let newArray=cats.slice(0,-1)
    return newArray
}
function removeFirstCat(){
    let newArray=cats.slice(1);
    return newArray
}
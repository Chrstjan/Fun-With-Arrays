const popArray = ["Hello", 123, true];
//pop() fjerner det sidste element i et array
popArray.pop();
console.log(popArray);

const pushArray = [];
//push() tilføjer et element til den sidste plads i et array
pushArray.push("World", 321);
console.log(pushArray);

const shiftArray = ["Hello", "!"];
//shift() fjerner det første element i et array
shiftArray.shift();
console.log(shiftArray);

const unshiftArray = ["Bar"];
//unshift tilføjer et element til den første plads i et array
unshiftArray.unshift("Foo");
console.log(unshiftArray);

const sliceArray = ["Hello", "World", "!", 123];
/* slice() udplukker elementer fra et array og giver en "shallow" kopi af den orginale array
 og returner et nyt array med de udplukket ting fra den originale uden at ændre i den originale array */
console.log(sliceArray.slice(0, 3));

const forEachArray = ["img-01", "img-02", "img-03", "img-04"]
/* forEach() går igennem alle elementer i et array
og udfører den samme funktion for hvert element i arrayet.
man bruger et parameter i funktionen til at referere til elementerne i arrayet */
forEachArray.forEach((img) => {
    console.log(img);
});
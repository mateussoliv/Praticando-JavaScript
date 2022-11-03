// var x = 7;


// function imprimir(){
//     var x = 7;
//     console.log(x)
// }

// console.log(window)

function speakGeneric(){
    console.log(this.sound)
}


let dog = {
    sound: "Au Au",
    speak: speakGeneric
}

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

dog.speak();
cat.speak();

let bindedFunction = speakGeneric.bind(cat);

bindedFunction();
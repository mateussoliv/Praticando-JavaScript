let fs = require('fs');

// fs.readFile('NovoNome.txt', 'UTF8', function(error, data){

//     if(error){throw error};
//     console.log(data)

// })

let args = process.argv.slice(2);

let fileName = args[0];

fs.readFile(fileName, "UTF8", (error, data) =>{

    if(error) throw error;

    fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error)=>{
        if (error) throw error;

        console.log("Arquivo gerado");
    })


})
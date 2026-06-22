const button = document.getElementById('submit')

button.addEventListener('click', () =>{
    let nota = Number(document.getElementById('valor').value);

    if (isNaN(nota) || nota > 10 || nota < 0){
        console.log("digite uma nota válida")
    }else if(nota > 8){
        console.log("Sua nota é excelente!");
    } else if(nota > 6){
        console.log("Sua nota é boa!");
    } else {
        console.log("Regular")
    }
})

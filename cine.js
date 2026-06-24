const filmes = [
    "Interstellar",
    "Spider-Man",
    "Matrix",
    "Vingadores",
    "Pulp Fiction",
    "Django, Unleashed",
    "Kill Bill",
    "Forrest Gump",
    "Poderoso Chefao",
    "Seven"
];

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
    for (filme of filmes){
        console.log(filmes)
    };
})
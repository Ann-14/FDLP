import { films } from './films.js'
console.log(films)

// show all films titles

// (con for) let filmsLength = films.length


function showTitleFilms () {
    let arrayTitulo=[]
    films.forEach(function addTitle(film){arrayTitulo.push(film.Title)})
    
    /*let arrayTitulo=[]
    films.forEach(Object =>{
    arrayTitulo.push(Object.Title)
    })
     console.log(arrayTitulo)*/

        // ********Version con for**************** 
             /*const titleArray = []
              for (let i=0; i<filmsLength; i++){
             titleArray.push(films[i].Title)
            }
            console.log(titleArray)*/

  document.getElementById("functionOne").innerHTML = arrayTitulo //.join('<br>')      
}
document.getElementById('button1').addEventListener('click', () => showTitleFilms())

//console.log(arrayTitulo)
//showTitleFilms()

// create new array with imdbRating to number 
function changeRatingToNumber () {
let arraymodified=[]
   arraymodified = films.map(function toNum (element){
        parseFloat(element.imdbRating)
        console.log(arraymodified)
    })
}
changeRatingToNumber()

// order films by year
function orderFilmsByYear () {
}
orderFilmsByYear()

// show comming soon films
function showCommingSoonFilms () {
}
showCommingSoonFilms()

// find some serie with genere Action
function findSomeSerie () {
}
findSomeSerie()

// reduce imdbRating and calculate average
function averageRating () {
}
averageRating()
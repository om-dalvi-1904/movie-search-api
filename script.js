let form = document.querySelector('form')
let container = document.querySelector('.image-container')

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let query = form.querySelector('input').value
    searchMovie(query)
})

async function searchMovie(query){
    let req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    let movies = await req.json()
    createResult(movies);
}

function createResult(movies){
    for(let movie of movies){
        let resultMovie = document.createElement('div')
        resultMovie.className = "result-movie"
        let img = document.createElement('img');
        let name = document.createElement('h3')
        img.src = movie.show.image.medium;
        name.textContent = movie.show.name
        resultMovie.appendChild(img)
        resultMovie.appendChild(name)
        container.appendChild(resultMovie)
    }
}
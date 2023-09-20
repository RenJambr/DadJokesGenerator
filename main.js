let jokeBtn = document.querySelector('.jokeBtn');
let joke = document.querySelector('#joke');

getJoke()

jokeBtn.addEventListener('click', getJoke)

async function getJoke(){

    const config = {
        headers:{
            Accept: "application/json"
        }
    }

    let response = await fetch("https://icanhazdadjoke.com", config);
    let data = await response.json();

    joke.innerText = data.joke;
}
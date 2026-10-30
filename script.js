let jokeButton=document.getElementById("spider-eye-btn");

jokeButton.addEventListener("click",tellJoke);

function tellJoke(){
    let jokes = document.createElement("p");
    jokes.textContent="What is a pause in work at a mortuary called? A coffin break!";
    document.body.appendChild(jokes);
}
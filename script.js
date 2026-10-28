let jokeButton=document.getElementById("bat-eye-btn");

jokeButton.addEventListener("click",tellJoke);

function tellJoke(){
    let jokes = document.createElement("p");
    jokes.textContent="why?";
    document.body.appendChild(jokes);
}
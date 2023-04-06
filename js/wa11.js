const btn = document.getElementById("js-new-quote");
var randomInt = 0;
btn.addEventListener('click', function() {
    console.log('Answer button clicked!');
    randomnum(); 
    getquote();
  });

const ansbtn = document.getElementById("js-answer-btn");
ansbtn.addEventListener('click', function() {
    getInstructions(); 
  });
  

const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

function randomnum() // randomly creates an int and picks that drink out of the array of drinks
{
    randomInt = Math.floor(Math.random() * 6);
}

async function getquote()
{
    try {
        const response = await fetch(endpoint)
        if (!response.ok) {
          throw Error(response.statusText)
        }
        const data = await response.json();
        console.log(data);
        
        const drink = data.drinks[randomInt];
        displayQuote(drink.strDrink)

      } catch (err) {
        console.log(err);
        alert('Sorry, there was an error fetching the quote.');
      }
}

async function getInstructions()
{
    console.log("The button is clicked"); 
    try {
        const response = await fetch(endpoint)
        if (!response.ok) {
          throw Error(response.statusText)
        }
        const data = await response.json();
        console.log(data);
        console.log("The button is clicked"); 
        const drink = data.drinks[randomInt];
        showAnswer(drink.strInstructions)
        console.log("The button is clicked"); 

      } catch (err) {
        console.log(err);
        alert('Sorry, there was an error fetching the quote.');
      }
}


function displayQuote(quoteparam)
{
    const answer = document.querySelector("#js-answer-text");
    answer.textContent = "";
    const quotetxt = document.querySelector("#js-quote-text");
    quotetxt.textContent = quoteparam; 
    quotetxt.style.transition = "opacity 1s ease-in-out";
    quotetxt.style.opacity = 0;
    setTimeout(() => {
        quotetxt.textContent = quoteparam; 
        quotetxt.style.opacity = 1;
    }, 1000);
}

function showAnswer(quoteparam)
{
    const answer = document.querySelector("#js-answer-text");
    console.log("The button is clickedsefsdgs"); 
    answer.textContent = quoteparam; 
    answer.style.transition = "opacity 1s ease-in-out";
    answer.style.opacity = 0.5;
    answer.style.color = `"black"`;
    setTimeout(() => {
        answer.style.opacity = 1;
    }, 100);
}



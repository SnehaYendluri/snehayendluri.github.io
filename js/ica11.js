const btn = document.getElementById("js-new-quote");
btn.addEventListener('click', getquote);

const ansbtn = document.getElementById("js-answer-text");
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function getquote()
{
    // console.log("The button is clicked"); 
    try {
        const response = await fetch(endpoint)
        if (!response.ok) {
          throw Error(response.statusText)
        }
        const data = await response.json();
        // console.log(data);
        displayQuote(data.question)
        showAnswer(data.answer)
        // ansbtn.addEventListener('click',showAnswer(data.answer))

      } catch (err) {
        console.log(err);
        alert('Sorry, there was an error fetching the quote.');
      }
}

function displayQuote(quoteparam)
{
    const quotetxt = document.querySelector("#js-quote-text");
    quotetxt.textContent = quoteparam; 
}

function showAnswer(quoteparam)
{
    const answer = document.querySelector("#js-answer-text");
    answer.textContent = quoteparam; 
}

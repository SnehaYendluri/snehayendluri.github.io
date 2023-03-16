const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so Bob and :insertx: decided to play outside. Suddently it started to get :insertz: so they decided to go back inside. They sarted watching Tom and Jerry show on TV and got really hungry so they decided to get :inserty: which approximately weighed 300 pounds. Finally they took a nice little nap and that is how they ended the evening!';

const insertx = ['Willy Wonka', 'Rick', 'Mory'];
const inserty = ['a small sausage pizza', 'a gigantic pork burrito', 'some hot chicken noodle soup'];
const insertz = ['foggy and gloomy', 'cloudy', 'sunny again'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertx);
  const yItem = randomValueFromArray(inserty);
  const zItem = randomValueFromArray(insertz);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name); 

  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} Celsius`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature); 
    newStory = newStory.replaceAll('300 pounds', weight); 

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
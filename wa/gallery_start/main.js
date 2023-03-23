const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
/* Declaring the alternative text for each image file */

const images = [`bunnypic3.png`, `bunnypic2.png`, `cutebunny1.png`, `bunnypic1.png`, `cutebunnies.gif`];
const alts = {
  'bunnypic1.png' : 'studious bunny',
  'bunnypic2.png' : 'bunny and a duck',
  'bunnypic3.png' : 'skaterboard bunny',
  'cutebunny1.png' : 'bunny with carrots',
  'cutebunnies.gif' : 'two bunnies having fun'
}

/* Looping through images */
for (const i of images)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${i}`);
    newImage.setAttribute('alt', `alts[i]`);
    newImage.style.height = `100px`;
    newImage.style.borderRadius = `10px`; 
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src; 
        displayedImage.alt = e.target.alt;
    }); 
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
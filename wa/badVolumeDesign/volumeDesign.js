const slider = document.querySelector('.slider');
const range = slider.querySelector('.slider-range');
const value = slider.querySelector('.slider-value');

// Function to convert the number into a word 
function convertToWords(num) {
    const ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const tens = ['Zero', 'Zero', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    let words = '';
    if (num >= 100) {
      words += ones[Math.floor(num / 100)] + ' hundred ';
      num %= 100;
    }
    if (num >= 20) {
      words += tens[Math.floor(num / 10)] + ' ';
      num %= 10;
    } else if (num >= 10) {
      words += teens[num - 10] + ' ';
      num = 0;
    }
    if (num > 0) {
      words += ones[num] + ' ';
    }
    return words;
  }
  
range.addEventListener('input', () => {
    const val = range.value;
    
    // Styling the slider
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const percent = ((val - min) / (max - min)) * 100;
  
    const button = document.createElement('button');
    button.innerHTML = convertToWords(val);
    button.style.borderRadius = '80%'; // make button round
    button.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`; // set random color
    button.style.position = 'absolute'; // set position to absolute
    button.style.left = `${Math.random() * window.innerWidth}px`; // set random X coordinate
    button.style.top = `${Math.random() * window.innerHeight}px`; // set random Y coordinate
    button.style.zIndex = -1; 
    document.body.appendChild(button);

    // Add event listener to button
  button.addEventListener('click', () => {
    range.value = val;
    value.innerHTML = `Current Volume: ${val}`;
    value.style.backgroundColor = 'black';
    value.style.color = 'white';
  });

});

// changing the z value to be high so that it sticks out compared to the buttons 
slider.style.zIndex = 1000;
value.style.zIndex = 1000;
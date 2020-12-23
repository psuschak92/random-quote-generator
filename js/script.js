/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {quote: 'Everybody thinks of changing humanity, and nobody thinks of changing himself.', source: 'Leo Tolstoy', citation: 'Pamphlets', year: 1900 , tag: NaN},
  {quote: 'If you hear a voice within you saying, “You are not a painter,” then by all means paint, boy, and that voice will be silenced, but only by working.', source: 'Vincent Van Gogh', citation: 'Letter to Theo van Gogh', year: 1883,tag:'inspirational'},
  {quote: 'Today you are you, that is truer than true. There is no one alive who is youer than you.', source: 'Dr. Seuss', citation: 'Happy Birthday to You!', year: 1959, tag: NaN},
  {quote: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.', source: 'Dr. Seuss', citation: 'Oh, the Places You\'ll Go!', year: 1990, tag: NaN},
  {quote: 'For small creatures such as we the vastness is bearable only through love.', source: 'Carl Sagan', citation: 'Cosmos', year: 1980, tag: 'popular science'},
  {quote: 'Science is not only compatible with spirituality; it is a profound source of spirituality.', source: 'Carl Sagan', citation: 'A Demon Haunted World', year: 1995, tag: 'popular science'},
  {quote: 'The struggle itself toward the heights is enough to fill a man\'s heart. One must imagine Sisyphus happy.', source: 'Albert Camus', citation: 'The Myth of Sisyphus', year: 1942, tag: NaN},
  {quote: 'The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.', source: 'Albert Camus', citation: 'The Rebel', year: 1951, tag: 'inspirational'}
];

/***
 * `getRandomQuote` function
***/

// takes a max value, and returns any number from 0 to max
let getRandomNumber = (max) => Math.floor(Math.random() * max) 

let getRandomQuote = () => {
  let index = getRandomNumber(quotes.length);
  return quotes[index];
}

/***  
 * `Random background colors`
***/

function getRandomColor() {
  return `rgb(${getRandomNumber(256)}, ${getRandomNumber(256)}, ${getRandomNumber(256)})`;
}

let setBackgroundColor = () => {
  document.body.style.backgroundColor = getRandomColor();
}

/***
 * `printQuote` function
***/

let printQuote = () => {
  // set a new background color after every click event
  setBackgroundColor(); 
  let quote = getRandomQuote();
  let html = `<p class="quote"> ${quote.quote} </p><p class="source"> ${quote.source} `;
  if ( quote.citation ) {
    html += `<span class="citation"> ${quote.citation} </span>`;
  }
  if ( quote.year ) {
    html += `<span class="year"> ${quote.year} </span>`;
  }
  // check for the additional quote object property
  if ( quote.tag ) {
    html += `<span class="year"> ${quote.tag} </span>`; 
  }
  html += `</p>`;
  return document.getElementById('quote-box').innerHTML = html;
}

/***  
 * `Auto-refreshed quotes`
***/

// automatically set the interval upon page rendering 
let interval = setInterval(printQuote, 20000); 

// `resetInterval` will restart the global interval value after every `click`
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(printQuote, 20000);
}
// implement the `resetInterval` function upon every button click
document.getElementById('load-quote').addEventListener('click', resetInterval, false); 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

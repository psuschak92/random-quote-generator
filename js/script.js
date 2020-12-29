const quotes = [
  {
    quote: 'Everybody thinks of changing humanity, and nobody thinks of changing himself.',
    source: 'Leo Tolstoy',
    citation: 'Pamphlets',
    year: 1900,
    tag: ''
  },
  {
    quote: 'If you hear a voice within you saying, “You are not a painter,” then by all means paint, boy, and that voice will be silenced, but only by working.',
    source: 'Vincent Van Gogh',
    citation: 'Letter to Theo van Gogh',
    year: 1883,
    tag: 'inspirational'
  },
  {
    quote: 'Today you are you, that is truer than true. There is no one alive who is youer than you.',
    source: 'Dr. Seuss',
    citation: 'Happy Birthday to You!',
    year: 1959,
    tag: ''
  },
  {
    quote: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
    source: 'Dr. Seuss',
    citation: 'Oh, the Places You\'ll Go!',
    year: 1990,
    tag: ''
  },
  {
    quote: 'For small creatures such as we the vastness is bearable only through love.',
    source: 'Carl Sagan',
    citation: 'Cosmos',
    year: 1980,
    tag: 'popular science'
  },
  {
    quote: 'Science is not only compatible with spirituality; it is a profound source of spirituality.',
    source: 'Carl Sagan',
    citation: 'A Demon Haunted World',
    year: 1995,
    tag: 'popular science'
  },
  {
    quote: 'The struggle itself toward the heights is enough to fill a man\'s heart. One must imagine Sisyphus happy.',
    source: 'Albert Camus',
    citation: 'The Myth of Sisyphus',
    year: 1942,
    tag: ''
  },
  {
    quote: 'The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.', 
    source: 'Albert Camus',
    citation: 'The Rebel',
    year: 1951,
    tag: 'inspirational'
  },
  { 
    quote: 'You and I are all as much continuous with the physical universe as a wave is continuous with the ocean.', 
    source: 'Alan Watts', 
    citation: '', 
    year: NaN, 
    tag: '' 
  },
  { 
    quote: 'Don\'t sweat the petty things and don\'t pet the sweaty things.', 
    source: 'George Carlin', 
    citation: '', 
    year: NaN, 
    tag: '' 
  }
];

// takes a max value, and returns any number from 0 to max - 1
const getRandomNumber = (max) => Math.floor(Math.random() * max)

const getRandomQuote = () => {
  const index = getRandomNumber(quotes.length);
  // console.log(index);
  return quotes[index];
}

// make use of getRandomNumber to generate a random rgb value
function getRandomColor() {
  return `rgb(${getRandomNumber(256)}, ${getRandomNumber(256)}, ${getRandomNumber(256)})`;
}

const setBackgroundColor = () => {
  document.body.style.backgroundColor = getRandomColor();
}

const printQuote = () => {
  // reset the interval every time printQuote is called
  clearInterval(interval);
  interval = setInterval(printQuote, 10000);
  // set a new background color after every click event
  setBackgroundColor();
  const quote = getRandomQuote();
  let html = `<p class="quote"> ${quote.quote} </p><p class="source"> ${quote.source} `;
  if (quote.citation) {
    html += `<span class="citation"> ${quote.citation} </span>`;
  }
  if (quote.year) {
    html += `<span class="year"> ${quote.year} </span>`;
  }
  // check for the additional quote property
  if (quote.tag) {
    html += `<span class="year"> ${quote.tag} </span>`;
  }
  html += `</p>`;
  return document.getElementById('quote-box').innerHTML = html;
}

// automatically set the interval upon DOM rendering 
let interval = setInterval(printQuote, 10000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);

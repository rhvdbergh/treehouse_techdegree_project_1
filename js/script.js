// Treehouse Techdegree Project 1 - Random Quote Generator

// Submission by Ronald van der Bergh
// Attempt at extra credit (background color changes with quote, 30 seconds 
// automatic quote change, extra properties in object )


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// array to hold quote objects
// quote objects framework: { quote: '', source: '', citation: '', year: '', bartlettPage: '' }
// quotations sourced from "Familiar Quotations" by John Bartlett, 1968 edition, available online
// at https://archive.org/details/familiarquotatio017007mbp
var quotes = [{
        quote: 'To different minds, the same world is a hell, and a heaven.',
        source: 'Ralph Waldo Emerson',
        citation: 'Journal',
        year: '1822',
        bartlettPage: '604'
    },
    {
        quote: 'One man, one vote.',
        source: 'Civil rights slogan',
        bartlettPage: '1104'
    },
    {
        quote: 'Death is nothing to us, since when we are, death has not come, and when death has come, we are not.',
        source: 'Epicurus',
        citation: 'Diogenes Laertius 10.125',
        bartlettPage: '103'
    },
    {
        quote: 'Whatever is worth doing at all, is worth doing well.',
        source: 'Philip Dormer Stanhope',
        citation: 'Letters',
        year: '1746',
        bartlettPage: '415'
    },
    {
        quote: 'I have thought too much to stoop to action.',
        source: 'Philippe Auguste Villiers',
        citation: 'Axel',
        year: '1890',
        bartlettPage: '780'
    },
    {
        quote: 'Punctuality is the politeness of kings.',
        source: 'Louis XVIII',
        citation: 'A favorite saying',
        bartlettPage: '485'
    },
    {
        quote: 'The best of men cannot suspend their fate: the good die early, and the bad die late.',
        source: 'Daniel Defoe',
        citation: 'Character of the Late Dr. S. Annesley',
        year: '1715',
        bartlettPage: '385'
    },
    {
        quote: 'If your descent is from heroic sires, [s]how in your life a remnant of their fires.',
        source: 'Nicolas Boileau-Despréaux',
        citation: 'Satire 5, l. 43',
        bartlettPage: '377'
    },
    {
        quote: 'To insure peace of mind ignore the rules and regulations.',
        source: 'George Ade',
        citation: 'Forty Modern Fables: The Crustacean',
        year: '1901',
        bartlettPage: '886'
    },
    {
        quote: 'You can tell the ideals of a nation by its advertisements.',
        source: 'Norman Douglas',
        citation: 'South Wind',
        year: '1917',
        bartlettPage: '894'
    }

];

// set inital timer to run at intervals of 30 seconds (= 30000 milliseconds)
// to change the quote and background color
var timer = window.setInterval(printQuote, 30000);

// function to select and return quote object randomly from quotes array 
function getRandomQuote() {
    // quotes array's index is length - 1, so Math.floor * quotes.length ensures 
    // a number between 0 and quotes.length - 1.
    var randNum = Math.floor(Math.random() * quotes.length);
    return quotes[randNum];
}

// returns a random value between and including 0 - 255
function randColor() {
    return Math.floor(Math.random() * 256);
}

// function to print a random quote to the document
// select random quote, create HTML string, display HTML to the page
// if citation or year is missing, don't add respective value to the HTML
function printQuote() {
    var quote = getRandomQuote();

    // prepare the HTML string
    quoteHTML = '<p class="quote"> ' + quote.quote + '</p>';
    quoteHTML += '<p class="source"> ' + quote.source;
    // check to see if there is a citation added for this specific quote
    if ('citation' in quote) {
        quoteHTML += '<span class="citation"> ' + quote.citation + '<span>';
    }
    // check to see if there is a year added for this specific quote
    if ('year' in quote) {
        quoteHTML += '<span class="year"> ' + quote.year + '<span>';
    }
    quoteHTML += '</p>';

    // display on web page
    document.getElementById('quote-box').innerHTML = quoteHTML;

    // change the background color to a random color
    randRGB = "rgb(" + randColor() + "," + randColor() + "," + randColor() + ")";
    document.body.style.backgroundColor = randRGB;

    // clear previous timer to make sure that this quote displays for 30 seconds
    clearInterval(timer);

    // set new timer to change quote and background color 
    timer = window.setInterval(printQuote, 30000);
}
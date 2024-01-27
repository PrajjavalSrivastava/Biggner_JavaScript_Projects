var quotes = [
    'People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you’re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.',
    'Life is what happens to us while we are making other plans',
    'Life isn’t about finding yourself. Life is about creating yourself.',
    'Doubt kills more dreams than failure ever will',
    'Whether you think you can or think you can’t, you’re right.',
    'Honesty is the best policy',
    'Jai Shree Ram'
]


function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}




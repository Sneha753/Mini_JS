const quotes = [
    "All that we are is the result of what we have thought",
    "If you judge people, you have no time to love them.",
    "The most courageous act is still to think for yourself. Aloud.",
    "The greatest wealth is to live content with little.",
    "The future belongs to those who prepare for it today.",
    "The successful warrior is the average man, with laser-like focus.",
    "Those who dare to fail miserably can achieve greatly.",
    "A great man is always willing to be little.",
    "The root of suffering is attachment.",
    "Keep calm and carry on.",
    "That’s one small step for a man, one giant leap for mankind.",
    "Ask not what your country can do for you, but what you can do for your country.",
    "Family is the most important thing in the world."
]

const useIndexes = new Set()
const quoteElement = document.getElementById("quote");

function generate() {
    while(true){
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if(useIndexes.has(randomIdx)) continue;
    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    useIndexes.add(randomIdx);
    break;
    }
}
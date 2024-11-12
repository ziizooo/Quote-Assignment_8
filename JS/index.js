const quotes = [
  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "Always forgive your enemies; nothing annoys them so much.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
  "A friend is someone who knows all about you and still loves you.",
  "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  "If you tell the truth, you don't have to remember anything.",
  "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "Be the change that you wish to see in the world.",
  "You only live once, but if you do it right, once is enough.",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  "A room without books is like a body without a soul.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "So many books, so little time.",
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  "Be yourself; everyone else is already taken.",
];
const authors = [
  "― Mahatma Gandhi",
  "― Oscar Wilde",
  "― Oscar Wilde",
  "― Elbert Hubbard",
  "― Maya Angelou",
  "― Mark Twain",
  "― Albert Camus",
  "― Robert Frost",
  "― Mahatma Gandhi",
  "― Mae West",
  "― Dr. Seuss",
  "― William W. Purkey",
  "― Bernard M. Baruch",
  "― Marcus Tullius Cicero",
  "― Albert Einstein",
  "― Frank Zappa",
  "― Marilyn Monroe",
  "― Oscar Wilde",
];
function generateQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("newQuote").textContent = quotes[randomIndex];
  document.getElementById("newAuthor").textContent = authors[randomIndex];
}
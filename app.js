function init() {
    var quotes = [
        {
            quote:
              "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
            author: "Nelson Mandela"
        },
        {
            quote:
              "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        },
        {
            quote:
              "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
            author: "Steve Jobs"
        },
        {
            quote:
              "If life were predictable it would cease to be life, and be without flavor.",
            author: "Eleanor Roosevelt"
        },
        {
            quote:
              "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
            author: "Oprah Winfrey"
        },
        {
            quote:
              "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
            author: "James Cameron"
        },
        {
            quote:
              "Life is what happens when you're busy making other plans.",
            author: "John Lennon"
        },
        {
            quote:
              "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
            author: "Mother Teresa"
        },
        {
            quote:
              "When you reach the end of your rope, tie a knot in it and hang on.",
            author: "Franklin D. Roosevelt"
        },
        {
            quote:
              "Always remember that you are absolutely unique. Just like everyone else.",
            author: "Margaret Mead"
        },
        {
            quote:
              "Don't judge each day by the harvest you reap but by the seeds that you plant.",
            author: "Robert Louis Stevenson"
        },
        {
            quote:
              "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            quote:
              "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
            author: "Benjamin Franklin"
        },
        {
            quote:
              "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
            author: "Helen Keller"
        },
        {
            quote:
              "It is during our darkest moments that we must focus to see the light.",
            author: "Aristotle"
        },
        {
            quote:
              "Whoever is happy will make others happy too.",
            author: "Anne Frank"
        },
        {
            quote:
              "Do not go where the path may lead, go instead where there is no path and leave a trail.",
            author: "Ralph Waldo Emerson"
        },
        {
          quote:
            "Be yourself; everyone else is already taken.",
          author: "Oscar Wilde"
        },
        {
          quote:
            "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
          author: "Marilyn Monroe"
        },
        {
          quote:
            "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
          author: "Albert Einstein"
        },
        {
          quote:
            "So many books, so little time.",
          author: "Frank Zappa"
        },
        {
          quote:
            "A room without books is like a body without a soul.",
          author: "Marcus Tullius Cicero"
        },
        {
          quote:
            "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
          author: "Bernard M. Baruch"
        },
        {
          quote:
            "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
          author: "William W. Purkey"
        },
        {
          quote:
            "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
          author: "Dr. Seuss"
        },
        {
          quote:
            "You only live once, but if you do it right, once is enough.",
          author: "Mae West"
        }
    ];

    var generator = document.getElementById('generate');

    generator.addEventListener("click", function() {
        document.getElementById("icon").classList.remove("hidden");

        var random = Math.floor(Math.random() * quotes.length);

        document.getElementById("quote").textContent = quotes[random].quote;
        document.getElementById("author").textContent = quotes[random].author;
    });
}
window.onload = init;

document.getElementById("themeSwitcher").addEventListener("click", function() {
    document.getElementById("html").classList.toggle("night");
})
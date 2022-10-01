let quotes = [
    `“A warm smile is the universal language of kindness.” `,
    `“No one is useless in this world who lightens the burdens of another” `,
    `“Happiness is not something ready made. It comes from your own actions.” `,
    `“We make a living by what we get. We make a life by what we give” `,
    `“Success is not final, failure is not fatal: it is the courage to continue that counts.” `,
    ` “We rise by lifting others” `,
    `“It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.” `,
    `“You are never too old to set another goal or to dream a new dream.” `,
    `“Character is doing right thing when nobody's looking” `,
    `“The bad news is time flies. The good news is you’re the pilot.” `,
];

let author = [
    ` - William Arthur Ward`,
    `- Charles Dickens`,
    `-Dalai Lama`,
    `- Wilnston Churchill`,
    `- Winston Churchill`,
    `- Robert Ingersoll`,
    `– William James`,
    `– C.S. Lewis`,
    `– J.C. Watts`,
    `- Michael Altshuler`,
];

let color_change = [
    `#f87171`,
    `#fdba74`,
    `#fde68a`,
    `#84cc16`,
    `#99f6e4`,
    `#22d3ee`,
    `#38bdf8`,
    `#93c5fd`,
    `#f472b6`,
    `#818cf8`,
];
function newQuote() {

    let random_num = Math.random();
    let quote_list = Math.floor(random_num * (quotes.length));
    let author_list = Math.floor(random_num * (author.length));
    let clr_change = Math.floor(random_num * (color_change.length));
    document.getElementById("quote_list").innerHTML = quotes[quote_list];
    document.getElementById("author_list").innerHTML = author[author_list];
    document.getElementById("quote_list").style.color = color_change[clr_change];
    document.getElementById("author_list").style.color = color_change[clr_change];
    document.getElementById("button").style.backgroundColor = color_change[clr_change + 1];
    document.body.style.backgroundColor =  color_change[clr_change + 1];


}

function timeofday(){

    let time = new Date();
    let hour = time.getHours();
    let time_of_day = document.getElementById("time_of_day").innerHTML;

    if(hour == 0 || hour < 12){
        time_of_day = "morning";
    } else if(hour < 16){
        time_of_day = "afternoon";
    } else if(hour < 20){
        time_of_day = "evening";
    } else if(hour == 20 || hour > 20){
        time_of_day = "night";
    }

    
    document.getElementById("time_of_day").innerHTML = time_of_day;
}

setInterval(timeofday, 1000);
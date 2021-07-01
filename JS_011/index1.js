

// for loops
// deel 1:
// for (index variable ; condition; incrementer ++) zoals hierboven los staat


// for (age = 5; age < 10; age++) {
//     console.log("your age is less then 10");
// }
// document.write("you are now over 10") // zo precies zoals hierboven maar korter


// deel2
//dit hoeven we nog niet te kunnen
// hierboven pakken we alle links van de html pagina
// i is voor generic, of algemeen? length telt het aantal links en geeft er een nummer aan


// var links = document.getElementsByTagName("a");
// for (i = 1; i <= links.length; i++) {
//     console.log("this is link number" + i);

// }
// document.write("all links are now looped");

// even-odd-operator.js deel 1

for (let i = 0; i <= 20; i++) {


    if (i % 2 == 0) {
        console.log(`${i} is even`)
    }
    else {
        console.log(`${i} is odd`)
    }
    // TODO: determine if i is odd or even
    // TODO: use console.log
}


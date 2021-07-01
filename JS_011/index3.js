// while loops

// while this condition is true dan altijd looping ( maar altijd ergens een false inbouwen 
// anders loopt de computer vast

// var age = 5;
// while (age < 10) {
//     console.log("your age is less then 10");
//     age++;// deze telt er telkens 1 bij zodat na 5 loops hij eruitbreekt en naar de document.write gaat
// }
// document.write("you are now over 10")

// for loops

// deel 1:
// for (index variable ; condition; incrementer ++) zoals hierboven los staat
for (age = 5; age < 10; age++) {
    console.log("your age is less then 10");

}
document.write("you are now over 10") // zo precies zoals hierboven maar korter

// deel2
var links = document.getElementsByTagName("a");
//dit hoeven we nog niet te kunnen
// hierboven pakken we alle links van de html pagina
// i is voor generic, of algemeen? length telt het aantal links en geeft er een nummer aan

for (i = 1; i <= links.length; i++) {
    console.log("this is link number" + i);

}
document.write("all links are now looped");
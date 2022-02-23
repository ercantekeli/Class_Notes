// let score = 51

// if (score>= 50){
//     console.log("Tebrikler, geçtiniz");
// }
// var text;
// var fruits = "1"
// switch (fruits) {
//     case "Banana":
//         text = "Banana is good"
//      break;
//     case "Orange":
//         text = "I am not a fan of orange.";
//     break;
//     case "Apple":
//         text = "How you like them apples?";
//     break;
//     default:
//         text = "I have never heard of that fruit...";
//         break;
// }
// console.log(text);
var text
var day = prompt("Which day?: ");

switch (day) {
    case "monday":
    case "wednesday":
    case "thursday":
    case "saturday":
            text = "In Class"
        break;
    case "tuesday":
        text = "Team work"
        break;
    case "sunday":    
        text = "Holiday"
        break;
    default:
        text = "Yanlis gun girildi"
        break;
}
console.log(text);

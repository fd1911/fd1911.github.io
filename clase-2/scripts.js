var number = prompt('Insert a random number:');

if (number > 1000){
    alert('The number is higher than 10000')
}
 

var text= prompt ("Say 'Hello' to this beautifull JS:");
if (text === "Hello") {
    console.warn("Hey! It works!")
}
else console.warn("You didn't said Hello");

var num2 = prompt("Insert a random number:");
var text1 = ["The chosen number,","is between 10 to 50"];
var text2 = ["The number: ","is out of range"];
if (num2 >= 10 && num2 <= 50){
    console.log(`${text1[0]} ${num2} ${text1[1]}`);
}
else 
    console.log(`${text2[0]}${num2} ${text2[1]}`);

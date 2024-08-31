// Chapter No # 3
// Assignment no 2

// Question no 1
var age = 20;
alert("I am " + age + " years old");
// Question no 2
var visit = 14;
alert("You have visited this site " + visit + " times");
// Question no 3
var birthYear = 2003;
document.write("My birth year is " + birthYear + "<br>");
// Question no 4
var visitorName = "John Doe";
var productTitle = "T-Shirt";
var quantity = 5;
document.write(" <b>" + visitorName + "</b> ordered <b>" + quantity + "</b> " + productTitle + " on XYZ Clothing store" + "<br>");

// Chapter NO # 4
// Assignment no 2

// Question no 1
// Declare 3 variables in one statement

var name = "John",
age = 25,
city = "New York";
alert("Name: " + name + "\nAge: " + age + "\nCity: " + city);

// Question no 2

// 5 legal variable names
let $myVar = 1;
let _anotherVar = 2;
let camelCaseVar = 3;
let name123 = 4;
let first_name = 5;


// 5 illegal variable names (commented out because they would cause errors)
// let 123name = "invalid"; // starts with a number
// let var = "invalid"; // reserved keyword
// let my-variable = "invalid"; // contains a hyphen
// let my variable = "invalid"; // contains space
// let !myVar = "invalid"; // starts with an invalid character (!)


// Chapter NO # 5    MATH EXPRESSIONS
// Assignment no 2

// Question no 1
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// Question no 2

var num1 = 3;
var num2 = 5;
var difference = num1 - num2;
document.write("Difference of " + num1 + " and " + num2 + " is " + difference + "<br>");
var num1 = 3;
var num2 = 5;
var product = num1 * num2;
document.write("Product of " + num1 + " and " + num2 + " is " + product + "<br>");
var num1 = 3;
var num2 = 5;
var quotient = num1 / num2;
document.write("Quotient of " + num1 + " and " + num2 + " is " + quotient + "<br>");
var num1 = 3;
var num2 = 5;
var remainder = num1 % num2;
document.write("Remainder of " + num1 + " and " + num2 + " is " + remainder + "<br>");

// Question no 3

var num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num = ++num;
document.write("Value after increment is: " + num + "<br>");
num = num + 7;
document.write("Value after addition is: " + num + "<br>");
num = --num;
document.write("Value after decrement is: " + num + "<br>");
var remainder = num % 3;
document.write("The remainder is : " + remainder + "<br>");
// Question no 4

var ticketPrice = 600;
var numTickets = 5;
var totalCost = ticketPrice * numTickets;
document.write("Total cost of buying " + numTickets + " tickets is " + totalCost + " PKR" + "<br>");
// Question no 5

var num = 4;
var result = (num + 5) * 10 / 2;
document.write("Result: " + result + "<br>");
// Question no 6

var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F" + "<br>");
var fahrenheit = 70;
var celsius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsius + "°C" + "<br>");
// Question no 7

var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write("Total cost is " + totalCost + "<br>");
// Question no 8

var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("Percentage: " + percentage + "%" + "<br>");

// Question no 9

var dollar = 10;
var riyal = 25;
var pakistaniRupees = (dollar * 104.80) + (riyal * 28);
document.write("Total currency in Pakistani Rupees: " + pakistaniRupees + "<br>");
// Question no 10

var num = 5;
var result = ((num + 5) * 10) / 2;
document.write("Result: " + result + "<br>");
// Question no 11

var currentYear = 2023;
var birthYear = 2003;
var age = currentYear - birthYear;
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Age: " + age + "<br>");
// Question no 12

var radius = 20;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);
document.write("The circumference is " + circumference.toFixed(2) + "<br>");
document.write("The area is " + area.toFixed(2) + "<br>");
// Question no 13

var favoriteSnack = "chocolate";
var currentAge = 20;
var maxAge = 65;
var amountPerDay = 2;
var yearsRemaining = maxAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalSnacksRequired = daysRemaining * amountPerDay;
document.write("You will need " + totalSnacksRequired + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "<br>");
// Chapter NO # 6-9 (MATH EXPRESSIONS)
// Assignment no 2

// Question no 1
var a = 10;
document.write("The value of a is: " + a + "<br>");
var b = ++a;
document.write("The value of ++a is: " + b + "<br>");
var c = a++;
document.write("The value of a++ is: " + c + "<br>");
var d = --a;
document.write("The value of --a is: " + d + "<br>");
var e = a--;
document.write("The value of a-- is: " + e + "<br>");
// Question no 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("Result is " + result + "<br>");
// Question no 3
var name = prompt("Enter your name:");
alert("Hello, " + name + "!");
// Question no 5
var num = prompt("Enter a number:");
if (num !== null && num !== "") {
    var number = parseInt(num);
    if (!isNaN(number)) {
        var multiplicationTable = "";
        for (var i = 1; i <= 10; i++) {
            multiplicationTable += num + " x " + i + " = " + (number * i) + "\n";
        }
        alert(multiplicationTable);
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
} else {
    alert("You did not enter a number.");
}



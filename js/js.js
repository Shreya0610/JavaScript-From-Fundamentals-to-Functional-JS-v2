let section;
let arr = [11, 2, 3, 4, 5, 9, 7];
function start(name, sec) {
  console.log(`Hey ${name}. You are welcome to section ${sec}`);
  section = sec;
}

function exams() {
  switch (section) {
    case "A":
      console.log("You are in section A. Your class teacher is Shweta");
      break;
    case "B":
      console.log("You are in section B. Your class teacher is Riya");
      break;
    case "C":
      console.log("You are in section C. Your class teacher is Bianca");
      break;
    default:
      console.log("You are new here.. Pls get your section.");
      break;
  }
}
start("Shreya Sharma", "A");
exams();
start("Bharti", "B");
exams();
start("Yash", "C");
exams();

arr.splice(1, 1);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.includes(4, -3)); //false
console.log(arr.includes(4, -4)); //true
console.log(arr.includes(4, -6)); //true
console.log(arr.includes(4, 5)); //false
console.log(arr.includes(4)); //true

console.log("Shreya");

//objects
var person = {};
person.name = "Mrs. White";
who = person.name;

console.log(person);
console.log(who);

person.name = "Mr. White";
console.log(who);

//array
var persons = [];
persons.name = "Mrs. White";
var plea = "wouldShe";

persons[plea] = "I would never";
console.log(persons);

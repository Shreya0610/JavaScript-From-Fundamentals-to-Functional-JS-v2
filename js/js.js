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

console.log(arr.lastIndexOf(3, 1)); //doubt

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

//destructuring of object
var obj = { first: "Shreya", last: "Sharma" };
var first = obj.first;
var last = obj.last;

// or we can simplify this by using destructuring
let { first1, last1 } = { first1: "Shreya", last1: "Sharma" };

// in array
let array = [1, 2, 3, 4, 5];
let [a, , , d] = array;
console.log(a, d);

//object destructuring example
let object = {
  name: "Shreya",
  rollno: "19EJICS142",
  subject: "JS",
};
//let {name,subject} = object
let { fno = "123" } = object;
console.log(fno);

// for each and each
// forEach is used as an illterator the same as _.each but each works on both array and object unlike forEach
// the format of forEach is .. array.foreach(func) and the format of each is .. _.each(array,func)

// each for both array and object
const _ = {};
_.each = function (list, callback) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (var key in list) {
      callback(list[key], key, list);
    }
  }
};

//example for array
_.each(["Sally", "Georgie", "Porgie"], function (name, i, list) {
  if (list[i + 1]) {
    console.log(name, "is younger than", list[i + 1]);
  } else {
    console.log(name, "is the oldest");
  }
});

// example for object
_.each(object, function (value, key) {
  console.log("Hii my name is", value, key);
});

// _.map()
_.map(array, function (no, i) {
  return `${no} is at position ${i}`;
});
// _.filter
// _.filter(arr , callback){
//   it will only return the array which returns true to the callback function. which means callback function should return either true or false.
// }

const constructArr = function () {
  const arr = Array.prototype.splice.call(arguments); // or we can use Array.from(arguments)
  // the above statements convert array like object into array i.e. its output if printed will be ["was","it","in"]
  arr.push("the billiards room??");
  return arr.join(" "); // output was it in the billiards room
};
constructArr("was", "it", "in");

//High order functions
var increment = function (n) {
  return n + 1;
};
var square = function (n) {
  return n * n;
};
var doMathsSoIDontHaveTo = function (n, func) {
  return func(n);
};
doMathsSoIDontHaveTo(5, square); //25
doMathsSoIDontHaveTo(4, increment); //5
const reduce = function (list, cb, initial) {
  let memo = initial;
  for (let i = 0; i < list.length; i++) {
    if (i === 0 && memo === undefined) {
      memo = list[0];
      i++;
    } else {
      memo = cb(list[i], memo);
    }
  }
  return memo;
};
reduce([1, 2, 3], (v, sum) => v + sum, 0); //6
reduce([2, 3, 5], (v, sum) => v + sum); //10

let section;
let arr = [11, 2, 3, 4];
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

arr.splice(1,1);
console.log(arr);

arr.shift();
console.log(arr);
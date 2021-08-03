let section;
function start(name, sec) {
  console.log(`Hey ${name}. You are welcome to section ${sec}`);
  section = sec;
}
start("Shreya Sharma", "A");

function exams() {
  switch (section) {
    case "A":
      console.log("You are in section A. Your class teacher is Shweta");
      break;
      case "B":
        console.log("You are in section B. Your class teacher is Riya");
        break;
        case "C":
      console.log("You are in section C. Your class teacher is Bianaca");
      break;
    default:
      break;
  }
  
}
exams();
var game = {};
game.murderer = "??";
game["weapons"] = [
  { type: "pipe", location: "washroom" },
  { type: "candlestick", location: "drawing room" },
  { type: "cat", location: "garden" },
  { type: "gun", location: "infermary" },
  { type: "laser", location: "lab" },
];

game.name = [];
game.name[0] = "Miss. Scarlet";
game.name.push("Mr.Green");
// console.log(game);

const { name, weapon, room } = {
  name: "Rusty",
  room: "kitchen",
  weapon: "candlestick",
};

//list transformation
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log("My name is ", name);
    },
  };
}
var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];
var suspectList = [];
for (let i = 0; i < suspects.length; i++) {
    suspect = CreateSuspectObjects(suspects[i]);
}

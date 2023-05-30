// // Iteration 1: Names and Input

// hacker1 = "Guillermo";
// console.log("The driver's name is " + hacker1);

// hacker2 = "Tony";
// console.log("The navigator's name is " + hacker2);

// // Iteration 2: Conditionals

// if (hacker1.length > hacker2.length) {
//   console.log(
//     "The driver has the longest name, it has " + hacker1.length + " characters."
//   );
// } else if (hacker2.length > hacker1.length) {
//   console.log(
//     "It seems that the navigator has the longest name, it has " +
//       hacker2.length +
//       "characters."
//   );
// } else if (hacker1.length === hacker2.length) {
//   console.log(
//     "Wow, you both have equally long names, " + hacker1.length + "characters!"
//   );
// } else {
//   console.log("oops something went wrong!");
// }

// // Iteration 3: Loops

// let hacker1Upper = hacker1.toUpperCase();
// for (let i = 0; i < 1; i++) {
//   const result = hacker1Upper.split("").join(" ");
//   console.log(result);
// }

// let newString = "";
// for (let j = hacker1.length - 1; j >= 0; j--) {
//   newString += hacker1[j]; // or newString = newString + str[i];
// }
// console.log(newString);

// const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// // we start a value: let i = 0
// // define the condition for the loop to keep running i being smaller than the length of the alphabet string

// let hacker1Capital = hacker1[0];

// let hacker2Capital = hacker2[0];

// for (let i = 0; i < alphabet.length; i++) {
//   switch (alphabet) {
//     case hacker1Capital:
//       console.log("The driver's name goes first.");
//       break;
//     case hacker2Capital:
//       console.log("Yo, the navigator goes first definitely.");
//       break;
//   }
// }

// Iteration 1: Names and Input
hacker1 = "Guillermo";
console.log("The driver's name is " + hacker1);
hacker2 = "Tony";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      "characters."
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + "characters!"
  );
} else {
  console.log("oops something went wrong!");
}
// Iteration 3: Loops
//Iteration 3.1
let nameWithSpace = "";
for (let i = 0; i < hacker1.length; i++) {
  nameWithSpace += hacker1[i] + " ";
}
console.log(nameWithSpace.toUpperCase());

//Iteration 3.2
let newString = "";
for (let j = hacker1.length - 1; j >= 0; j--) {
  newString += hacker1[j]; // or newString = newString + str[i];
}
console.log(newString);

//Iteration 3.3
const alphabet = "abcdefghijklmnopqrstuvwxyz";
for (let k = 0; k < alphabet.length; k++) {
  if (alphabet[k].toUpperCase() === hacker1[0]) {
    console.log("The driver's name goes first.");
    {
      break;
    }
  } else if (alphabet[k].toUpperCase() === hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.");
    {
      break;
    }
  } else if (alphabet[k].toUpperCase() === hacker1[0] && hacker2[0]) {
    console.log("What?! You both have the same initial?");
    {
      break;
    }
  }
}

// Bonus 1:
//TODO: Generate 3 paragraphs. Store the text in a variable type of string.
const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat nisi, a tempus urna. Suspendisse potenti. Proin suscipit sollicitudin dui, in volutpat dui feugiat non. Maecenas auctor et nisi quis consectetur. Maecenas semper neque a lacus dictum pretium. Maecenas placerat cursus velit. Maecenas eget tortor at massa ultricies laoreet at in neque.

Praesent sed felis non arcu bibendum rutrum sit amet a sem. Suspendisse potenti. Morbi a dui commodo, malesuada est a, convallis diam. Suspendisse tristique iaculis augue nec gravida. Sed imperdiet elit ligula, in mattis nibh bibendum eu. Curabitur iaculis massa nibh, posuere dapibus mauris maximus sed. Quisque luctus, nulla euismod dignissim auctor, lectus nibh gravida ante, quis tincidunt tortor nibh aliquet tellus. Etiam nulla quam, cursus et ipsum quis, tempus tempor risus. Aenean nec tincidunt neque.

Pellentesque bibendum sem sit amet ultrices vehicula. Nullam nec tristique velit. Cras pretium, nulla non egestas vestibulum, tortor augue sollicitudin tellus, non vestibulum mi metus quis eros. Praesent eleifend elementum odio at vehicula. Suspendisse sed tincidunt arcu. Morbi id pellentesque ipsum. Nam tempus semper quam, eu pharetra ex rutrum eget. Nulla eu gravida velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim orci vitae posuere suscipit. In a nisi ante. Integer auctor vitae eros sed auctor. Phasellus interdum, leo ut commodo tincidunt, justo tellus pulvinar risus, sit amet efficitur risus justo ac felis. Praesent rhoncus sed eros sit amet sodales.`; // I use the backticks because that can see the whole text in one string;

//TODO Make your program count the number of words in the string.
// for (let i = 0; i < text.length; i++) {
//   console.log(i);
// } // in total 1573 words in the string of text

//TODO Make your program count the number of times the Latin word et appears.

let wordToSearch = "et";
let count = 0;

for (let i = 0; i < text.length; i++) {
  if (text.charAt(i) == wordToSearch) {
    count++;
  }
}

console.log(`Total occurrence : ${count}`);

// import { v4 as uuidv4 } from "uuid";
// import fs from "fs";

// // Read the JSON file
// // Make a copy as a new object
// // Iterate through the questions file
// // Check if already an ID, if no ID create one using the UUIDV4 function
// // Add new object to original questions doc
// fs.readFile("questions.json", (error, data) => {
//   if (error) {
//     return console.log("There has been a error");
//   }
//   let questions = JSON.parse(data);
//   let newQuestions = [];
//   questions.forEach((question) => {
//     const id = uuidv4();
//     const item = {
//       id: id,
//       Q: question.Q,
//       A: question.A,
//     };
//     newQuestions.push(item);
//   });
//   const newJSONfile = JSON.stringify(newQuestions, null, 2);
//   fs.writeFile("questions.json", newJSONfile, (err) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("The file has been saved");
//   });
// });

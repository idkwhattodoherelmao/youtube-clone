const name = "HokkaidoBot";
const userComment = "Amazing video! I learned a lot about Hokkaido's culture and history. Thank you for sharing!";

console.log(`User Comment: ${userComment}`);
console.log(`${name} is responding to the comment...`);

const commentSize = userComment.length;
console.log(`Analytics: This comment is ${commentSize} characters long.`);

const cleanComment = userComment.toLowerCase();
console.log(`Cleaned Comment: ${cleanComment}`);
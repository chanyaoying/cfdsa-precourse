// Define an array of possible titles
var titles = [
    "Logic will get you from A to B. Imagination will take you everywhere.",
    "There are 10 kinds of people in the world. Those who understand binary and those who don't.",
    "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other way is to make it so complicated that there are no obvious deficiencies.",
    "It's not that I'm so smart, it's just that I stay with problems longer.",
    "It is pitch dark. You are likely to be eaten by a grue.",
];
// Function to generate a random index from 0 to titles.length - 1
function getRandomIndex() {
    return Math.floor(Math.random() * titles.length);
}
// Function to change the H1 text to a random title
function changeRandomTitle() {
    var _a;
    var randomIndex = getRandomIndex();
    var randomTitle = (_a = titles[randomIndex]) !== null && _a !== void 0 ? _a : 'not working';
    var h1Element = document.querySelector("h1");
    if (h1Element !== null && h1Element.textContent !== undefined) {
        h1Element.textContent = randomTitle;
    }
}
// Call the function to change the H1 text initially
changeRandomTitle();
// Add an event listener to change the H1 text when the page is clicked
document.addEventListener("click", function () {
    changeRandomTitle();
});

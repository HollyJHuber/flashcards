const cardsOriginal = [
    {
        id: 100,
        question: "What is code?",
        answer: "code is the enemy"
    },
    {
        id: 101,
        question: "What is state?",
        answer: "state is the truth; it is always there. It is the singularity."
    },
    {
        id: 102,
        question: "What is true?",
        answer: "We have our truth and we are living it out in our lives."
    },
    {
        id: 103,
        question: "What is the circle of life?",
        answer: "HTML --> handler --> State --> render() --> HTML"
    },    
    {
        id: 104,
        question: "What will happen if you push to master?",
        answer: "Ross will fire you."
    },
    {
        id: 105,
        question: "What is a good way to live your life?",
        answer: "Yes, and ..."
    },
];

const cardsDisplay = cardsOriginal.splice();

console.log (cardsDisplay);

cardsDisplay.sort((a, z) => {
    return 0.5 - Math.random();
});

console.log (cardsDisplay);
/* make a copy of the array and sort it randomly using arrow function
that copy will be used to generate the card content
use id as key
use index +1 as the cardNumber
use array.length to determine the last card
*/

//export default cardsDisplay
const containerElement = document.querySelector('.container');

const careers = ["Web Developer", "Coder", "Programmer", "Software Engineer", "Astrophysicist"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerElement.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0, 1) === "A" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>
    `;

    // when 1 element is done
    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
        //todo: update it so that it wait for 1 second before printing next element
    }

    // when all element is done, restart it
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 200);
}
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const content = document.getElementById("content");

let noCount = 0;
let yesButtonSize = 16;

const phrases = [
  "No",
  "Are you sure?",
  "What if I asked really nicely?",
  "Baby please",
  "With chocolate on top",
  "What about a Adana Kebap?",
  "PLEASE HAYATIM",
  "But :*(",
  "I am going to die",
  "Yep im dead",
  "ok ur talking to Joey's ghost",
  "please babe",
  ":((((",
  "PRETTY PLEASE",
  "Estoy muerto",
  "No :(",
];

function getNoButtonText() {
  return phrases[Math.min(noCount, phrases.length - 1)];
}

yesButton.addEventListener("click", () => {
  // Zeige die Erfolgsseite
  content.innerHTML = `
    <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" style="height: 200px;" />
    <div style="font-size: 2rem; font-weight: bold; margin-top: 1rem;">WOOOOOO!!! I love you aşkım!! ;))</div>
  `;
});

noButton.addEventListener("click", () => {
  noCount += 1;
  
  // Update "No" Button Text
  noButton.textContent = getNoButtonText();
  
  // Vergrößere "Yes" Button
  yesButtonSize = noCount * 20 + 16;
  yesButton.style.fontSize = yesButtonSize + "px";
  yesButton.style.padding = (yesButtonSize / 2) + "px " + (yesButtonSize * 1.5) + "px";
  
});

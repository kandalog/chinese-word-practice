const questions = [
  "Jiātíng",
  "hèngbīn",
  "kǒu",
  "yéyé",
  "duō",
  "jiànkāng",
  "měi ~dōu...",
  "Páshān",
  "guǎnggào",
  "yǒu shíhòu",
  "lián ~yě...",
  "Zhōumò",
  "nàme",
  "bìyè",
  "zhèngzài",
  "de",
  "zhǎo",
  "chūzhōng shēng",
  "zhěng tiān",
  "guāng",
  "yònggōng",
  "chéngjī",
  "hái kěyǐ",
  "xiōngdì",
  "jiěmèi",
];

shuffle(questions);

const target = document.getElementById("inner");

questions.forEach((question, index) => {
  const p = document.createElement("p");

  let number = index + 1;

  if (String(number).length === 1) {
    number = "0" + String(number);
  }

  // p.textContent = number + " " + question;
  p.textContent = question;
  target.appendChild(p);
});

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

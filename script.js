const roastLines = [
  "You studied \"${h}\" hours? That’s not studying — that’s foreplay for procrastination.",
  "\"${c}\" chapters?You're the reason they put instructions on shampoo bottles. That's the level of brainpower we're dealing with.",
  "10 minutes? That’s not effort — that’s dry humping productivity",
  "You're like the free trial of a student. All the basic features, none of the premium results.",
  "Even background characters in anime have more motivation.",
  "Studying like that? Even YouTube ads last longer than your focus.",
  "If procrastination were a sport, you'd have gold medals by now.",
  "Are you actively trying to fail, or does this level of incompetence come naturally?",
  "Your study strategy is basically vibes and wishful thinking.",
  "At this rate, even ChatGPT is gonna pass before you do.",
  "You're not studying, you're just making the books feel less lonely.",
  "I've seen more effort from toddlers trying to lie about brushing teeth."
];


const gaslightLines = [
  "Oh wow, you studied \"${c}\" chapters? So proud of you! ...But wait, shouldn’t you be doing double that?",
  "You're doing your best! But... is your best really enough?",
  "Proud of you... kind of. Could've tried harder though."
];

const ammaLines = [
  "*Malayali mom voice*: Ithra samayam padichu ithu mathram? Enikku oru shame aanu. 😡",
  "Kuthiyittu irunnalum 1st rank kittiyirunnu! 😤",
  "Ente makane! Ivide nokku! Padikku!",
  "Karyam illatha kalam kazhinju! Ini enthinu phone venam?! 📱🚫",
  "Ombathu masam ninne chumanthu ithinano"
];

let currentMode = '';
let roastIndex = 0;

function goToModes() {
  const c = document.getElementById('chapters').value;
  const h = document.getElementById('hours').value;
  if (!c || !h) {
    alert("Enter both values!");
    return;
  }
  document.getElementById('mainPage').style.display = 'none';
  document.getElementById('modePage').style.display = 'block';
}

function goBack() {
  document.getElementById('modePage').style.display = 'none';
  document.getElementById('mainPage').style.display = 'block';
}

function startChat(mode) {
  currentMode = mode;
  document.getElementById('modePage').style.display = 'none';
  document.getElementById('chatPage').style.display = 'block';
  sendMore();
}

function sendMore() {
  const c = document.getElementById('chapters').value;
  const h = document.getElementById('hours').value;
  let line = "";

  if (currentMode === 'roast') {
    line = roastLines[roastIndex % roastLines.length];
  } else if (currentMode === 'gaslight') {
    line = gaslightLines[roastIndex % gaslightLines.length];
  } else if (currentMode === 'amma') {
    line = ammaLines[roastIndex % ammaLines.length];
  }

  const msg = line.replace(/\$\{c\}/g, c).replace(/\$\{h\}/g, h);
  const div = document.createElement('div');
  div.className = 'chat';
  div.textContent = msg;
  document.getElementById('chatBox').appendChild(div);
  roastIndex++;
}

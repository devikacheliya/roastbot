const roastLines = [
  "You studied \"${h}\" hours? That's cute. Was that with or without the naps?",
  "Even background characters in anime have more motivation.",
  "Studying like that? Even YouTube ads last longer than your focus.",
  "If procrastination were a sport, you'd have gold medals by now.",
  "I've seen more efforts toddler put into brushing their teeth"
];


const gaslightLines = [
  "Oh wow, you studied \"${c}\" chapters? So proud of you! ...But wait, shouldn’t you be doing double that?",
  "No, you're not a failure. A failure at least tried. You’re more like an accidental background character in your own life.",
  "It’s okay if you’re not the main character. But damn, you’re not even in the blooper reel.",
  "Proud of you... kind of. Could've tried harder though.",
  "You think you’re tired from studying? No. That’s your body reacting to the weight of generational disappointment."

];

const ammaLines = [
  "*Malayali mom voice*: ninekondu oru upakaravum undavilalo adishyamulla karyam alla",
  "Ninne okke valarthunathinu pakaram oru vazha natta mathiyayirunnu",
  "Ente makane! Ivide nokku! Padikku!",
  "Kudumbathinthe peru pookanayi jannichatha, oru upakarathinum undavila",
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

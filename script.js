const roastLines = [
  "You studied \"${h}\" hours?.",
  "\"${c}\" chapters? My grandma reads more just checking her WhatsApp forwards.",
  "Were you studying or just admiring the textbook cover?",
  "Even background characters in anime have more motivation.",
  "Studying like that? Even YouTube ads last longer than your focus.",
];

const gaslightLines = [
  "Oh wow, you studied \"${c}\" chapters? So proud of you! ...But wait, shouldn’t you be doing double that?",
  "You're doing your best! But... is your best really enough?",
  "Proud of you... kind of. Could've tried harder though.",
  "You think that was effort? That was barely warm-up level.",
  "Hmm, interesting strategy—doing the bare minimum and hoping for miracles."
];

const ammaLines = [
  "*Malayali mom voice*: Ithra samayam padichu ithu mathram? Enikku oru shame aanu. 😡",
  "Kuthiyittu irunnalum 1st rank kittiyirunnu! 😤",
  "Ente makane! Ivide nokku! Padikku!",
  "Karyam illatha kalam kazhinju! Ini enthinu phone venam?! 📱🚫",
  "Thottu kalanju kazhiyumbo mathram manassu varum alle? 😠"
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

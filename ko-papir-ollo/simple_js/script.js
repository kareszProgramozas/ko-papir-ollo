const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('result');
const choices = ['kő', 'papír', 'olló'];

// kiegészítés számláló kezdete
let winCount = 0;
let lossCount = 0;
let drawCount = 0;

const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const drawsDisplay = document.getElementById('draws');

// kiegészítés számláló vége

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const winner = determineWinner(playerChoice, computerChoice);

    //kiegészítés számláló kezdete
    if (winner === 'Nyertél! 🎉') {
    winCount++;
    winsDisplay.textContent = winCount;
    } else if (winner === 'Vesztettél 😢') {
    lossCount++;
    lossesDisplay.textContent = lossCount;
    } else {
    drawCount++;
    drawsDisplay.textContent = drawCount;
    }
    //kiegészítés számláló kezdete

    resultDiv.innerHTML = `
      <p>Te választottad: <strong>${playerChoice}</strong></p>
      <p>Számítógép: <strong>${computerChoice}</strong></p>
      <p>Eredmény: <strong>${winner}</strong></p>
    `;
  });
});

function determineWinner(player, computer) {
  if (player === computer) return 'Döntetlen!';
  if (
    (player === 'kő' && computer === 'olló') ||
    (player === 'papír' && computer === 'kő') ||
    (player === 'olló' && computer === 'papír')
  ) {
    return 'Nyertél! 🎉';
  } else {
    return 'Vesztettél 😢';
  }
}

// kiegészítés gomb kezdete

const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {
  winCount = 0;
  lossCount = 0;
  drawCount = 0;

  winsDisplay.textContent = 0;
  lossesDisplay.textContent = 0;
  drawsDisplay.textContent = 0;
  resultDiv.innerHTML = '';
});

// kiegészítés gomb vége

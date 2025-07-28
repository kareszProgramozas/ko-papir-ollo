<template>
  <div class="container">
    <h1>Kő – Papír – Olló</h1>

    <div class="buttons">
      <button v-for="choice in choices" :key="choice.value" @click="play(choice.value)">
        {{ choice.emoji }} {{ choice.label }}
      </button>
    </div>

    <div v-if="lastResult" class="result">
      <p>Te választottad: <strong>{{ lastPlayer }}</strong></p>
      <p>Számítógép: <strong>{{ lastComputer }}</strong></p>
      <p>Eredmény: <strong>{{ lastResult }}</strong></p>
    </div>

    <div class="scoreboard">
      <p>Nyertél: <span>{{ wins }}</span></p>
      <p>Vesztettél: <span>{{ losses }}</span></p>
      <p>Döntetlen: <span>{{ draws }}</span></p>
    </div>

    <button class="reset" @click="resetGame">🔄 Új játék</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const choices = [
  { label: 'Kő', value: 'kő', emoji: '🪨' },
  { label: 'Papír', value: 'papír', emoji: '📄' },
  { label: 'Olló', value: 'olló', emoji: '✂️' },
]

const wins = ref(0)
const losses = ref(0)
const draws = ref(0)

const lastPlayer = ref('')
const lastComputer = ref('')
const lastResult = ref('')

function play(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)].value
  const result = determineWinner(playerChoice, computerChoice)

  lastPlayer.value = playerChoice
  lastComputer.value = computerChoice
  lastResult.value = result

  if (result === 'Nyertél! 🎉') wins.value++
  else if (result === 'Vesztettél 😢') losses.value++
  else draws.value++
}

function determineWinner(player, computer) {
  if (player === computer) return 'Döntetlen!'
  if (
    (player === 'kő' && computer === 'olló') ||
    (player === 'papír' && computer === 'kő') ||
    (player === 'olló' && computer === 'papír')
  ) {
    return 'Nyertél! 🎉'
  }
  return 'Vesztettél 😢'
}

function resetGame() {
  wins.value = 0
  losses.value = 0
  draws.value = 0
  lastPlayer.value = ''
  lastComputer.value = ''
  lastResult.value = ''
}
</script>

<style scoped>

.container {
  max-width: 400px;
  margin: 30px auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  background: #f7f7f7;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
}

h1 {
  margin-bottom: 20px;
  font-size: 1.8em;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.buttons button {
  padding: 10px 20px;
  font-size: 1.1em;
  color: #222222;
  border: none;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: background-color 0.2s;
}

.buttons button:hover {
  background-color: #eee;
}

.result, .scoreboard {
  margin-top: 15px;
  font-size: 1.1em;
}

.reset {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  color: #222222;
  background-color: #eee;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 8px;
}

@media (max-width: 480px) {
  .buttons button,
  .reset {
    width: 100%;
    max-width: 200px;
  }

  h1 {
    font-size: 1.5em;
  }
}
</style>

<style>
body {
  background-color: #ffffff; /* fehér háttér */
  color: #222222;            /* sötét szöveg */
  font-family: Arial, sans-serif;
  padding: 20px;
}
</style>

import { useState } from 'react';

const choices = ['🪨', '📄', '✂️'];

const getResult = (user, computer) => {
  if (user === computer) return 'Döntetlen';
  if (
    (user === '🪨' && computer === '✂️') ||
    (user === '📄' && computer === '🪨') ||
    (user === '✂️' && computer === '📄')
  )
    return 'Nyertél';
  return 'Vesztettél';
};

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [score, setScore] = useState({ win: 0, lose: 0, draw: 0 });

  const handleClick = (choice) => {
    const computer = choices[Math.floor(Math.random() * 3)];
    const outcome = getResult(choice, computer);

    setUserChoice(choice);
    setComputerChoice(computer);
    setResult(outcome);

    setScore((prev) => ({
      win: prev.win + (outcome === 'Nyertél' ? 1 : 0),
      lose: prev.lose + (outcome === 'Vesztettél' ? 1 : 0),
      draw: prev.draw + (outcome === 'Döntetlen' ? 1 : 0),
    }));
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult('');
    setScore({ win: 0, lose: 0, draw: 0 });
  };

  return (
    <div style={styles.container}>
      <h1>Kő, Papír, Olló</h1>

      {/* Állapot számlálók */}
      <div style={styles.counters}>
        <p>✅ Győzelmek: {score.win}</p>
        <p>❌ Vereségek: {score.lose}</p>
        <p>➖ Döntetlenek: {score.draw}</p>
      </div>

      {/* Gombok */}
      <div>
        {choices.map((choice) => (
          <button key={choice} style={styles.button} onClick={() => handleClick(choice)}>
            {choice}
          </button>
        ))}
      </div>

      {/* Eredmények */}
      <div style={{ marginTop: '20px' }}>
        {userChoice && <p>Te választottál: {userChoice}</p>}
        {computerChoice && <p>Számítógép: {computerChoice}</p>}
        {result && <h2>{result}</h2>}
      </div>

      {/* Új játék gomb */}
      <button onClick={resetGame} style={styles.resetButton}>
        🔄 Új játék
      </button>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    color: '#222222',
    minHeight: '100vh',
  },
  counters: {
    marginBottom: '20px',
    fontSize: '1.2rem',
  },
  button: {
    fontSize: '2rem',    
    margin: '10px',
    padding: '15px 25px',
    cursor: 'pointer',
  },
  resetButton: {
    marginTop: '30px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#222222',
    backgroundColor: '#eee',
    border: '1px solid #ccc',
    cursor: 'pointer',
  }
};

export default App;
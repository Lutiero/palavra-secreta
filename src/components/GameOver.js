import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <p>
        Sua pontuação total foi: <span>{score}</span>
      </p>
      <button onClick={retry}>Reiniciar Jogo</button>
    </div>
  );
};

export default GameOver;

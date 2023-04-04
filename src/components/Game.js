import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div className="game">
      <div className="points">
        <span>Pontuação: 000</span>
      </div>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>Dica...</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra: </p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar</button>
        </form>
        <div className="wrongLettersContainer">
          <p>Letras já utilizadas</p>
          <span>a,</span>
          <span>b,</span>
          <span>c,</span>
        </div>
      </div>
    </div>
  );
};

export default Game;

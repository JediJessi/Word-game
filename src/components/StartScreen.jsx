import "./StartScreen.css";

const StartScreen = ({startGame}) => {

    return(
        <div className="start">
            <h1>Word Game</h1>
            <p>Clique abaixo para começar a jogar!</p>
            <button onClick={startGame}>Iniciar</button>
        </div>
    )
}

export default StartScreen;
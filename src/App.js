import React from "react";
import { WordsContext } from ".";
import Grid from "./components/organisms/Grid";
import { styled } from "./Theme";

const Container = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function App() {
  const [soluce, setSoluce] = React.useState("");
  const [guesses, setGuesses] = React.useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = React.useState("");
  const wordList = React.useContext(WordsContext);

  React.useEffect(() => {
    const word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    setSoluce(word.toLowerCase());
  }, [])

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        if (currentGuess.length < 5) return;
        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex((val) => val === null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess("");
      }
      if (currentGuess.length < 5 && e.key.match(/^[a-zA-ZäöüÄÖÜ]$/)) {
        setCurrentGuess((currentGuess) => currentGuess + e.key);
      }
      if (e.key === "Backspace") {
        setCurrentGuess((currentGuess) => currentGuess.slice(0, -1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentGuess, guesses]);

  return (
    <div className="App">
      <Container>
        <Grid
          currentGuessId={guesses.findIndex((val) => val == null)}
          currentGuess={currentGuess}
          guesses={guesses}
          soluce={soluce}
        />
      </Container>
    </div>
  );
}

export default App;

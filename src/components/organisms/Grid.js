import React from "react";
import { styled } from "../../Theme";
import Row from "../molecules/Row";

const StyledGrid = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

function Grid({ currentGuessId, currentGuess, guesses, soluce }) {


  return (
    <StyledGrid>
      {guesses.map((guess, index) => {
        if (index === currentGuessId) {
          return <Row key={index} word={currentGuess} soluce={soluce} />;
        }
        else {
          return <Row key={index} word={guess !== null ? guess : ""} soluce={soluce} isSubmitted={guess !== null ? true : false}/>;
        }
      })}
    </StyledGrid>
  );
}

export default Grid;

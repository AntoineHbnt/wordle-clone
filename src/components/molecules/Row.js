import React from "react";
import { styled } from "../../Theme";
import Tile from "../atoms/Tile";

const StyledRow = styled("div", {
  display: "flex",
  gap: "5px",
});

function Row({ word, soluce, isSubmitted }) {
  
  const handleCaseType = (index) => {
    if (word[index] === soluce[index]) {
      return "correct";
    }
    if (soluce.includes(word[index])) {
      return "present";
    } else {
      return "absent";
    }
  };

  return (
    <StyledRow>
      <Tile key={0} value={word[0] ?? ""} type={isSubmitted ? handleCaseType(0) : "default"} delay={0}/>
      <Tile key={1} value={word[1] ?? ""} type={isSubmitted ? handleCaseType(1) : "default"} delay={100}/>
      <Tile key={2} value={word[2] ?? ""} type={isSubmitted ? handleCaseType(2) : "default"} delay={200}/>
      <Tile key={3} value={word[3] ?? ""} type={isSubmitted ? handleCaseType(3) : "default"} delay={300}/>
      <Tile key={4} value={word[4] ?? ""} type={isSubmitted ? handleCaseType(4) : "default"} delay={400}/>
    </StyledRow>
  );
}
export default Row;

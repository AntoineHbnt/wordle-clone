import React from "react";
import { styled } from "../../Theme";

const StyledCase = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "62px",
  height: "62px",
  textTransform: "uppercase",
  fontWeight: 700,
  fontSize: "2rem",
  transformStyle: "preserve-3d",
  transition: "transform 0.2s",

  variants: {
    type: {
      default: {
        color: "color-tone-1",
        border: "2px solid $color-tone-4",
      },
      absent: {
        color: "$text-color",
        backgroundColor: "$color-absent",
      },
      present: {
        color: "$text-color",
        backgroundColor: "$color-present",
      },
      correct: {
        color: "$text-color",
        backgroundColor: "$color-correct",
      },
    },
    transition: {
      flipIn: {
        transform: "rotateX(90deg)",
      },
      flipOut: {
        transform: "rotateX(0deg)",
      },
    },
    delay: {
      0:{
        transitionDelay: "0s",
      },
      100:{
        transitionDelay: "0.1s",
      },
      200:{
        transitionDelay: "0.2s",
      },
      300:{
        transitionDelay: "0.3s",
      },
      400:{
        transitionDelay: "0.4s",
      },
    }
  },
});

function Tile({ value, type, delay }) {
  const [firstRender, setFirstRender] = React.useState(true);
  const [currentType, setCurrentType] = React.useState("default");
  const [transition, setTransition] = React.useState("idle");

  React.useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    
    setTransition("flipIn");
    const timer = setTimeout(() => {
      setTransition("flipOut");
      setCurrentType(type);
    }, 600);
    return () => clearTimeout(timer);
    
  }, [type]);

  return (
    <StyledCase
      type={currentType}
      transition={transition}
      delay={delay}
      css={value !== "" && { borderColor: "$color-tone-3" }}
    >
      {value}
    </StyledCase>
  );
}

export default Tile;

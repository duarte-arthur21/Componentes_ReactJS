import React from "react";
import styled from "styled-components";

const MyButton = ({ variation, onClick, children }) => {
  let styles = {};
  if (variation === "primary") {
    styles = {
      display: "block",
      width: "165.48px",
      fontWeight: 700,
      textDecoration: "none",
      textAlign: "center",
      height: "35px",
      background: "#1f58e7",
      border: "1px solid #cacccf",
      color: "#ffffff",
      borderRadius: "100px",
      marginTop: "25px",
      marginBottom: "7px",
    };
  } else if (variation === "secondary") {
    styles = {
      display: "block",
      width: "165.48px",
      fontWeight: 700,
      height: "35px",
      backgroundColor: "#00b509",
      borderRadius: "100px",
      border: "#2f46b7",
      color: "#ffffff",
      marginTop: "25px",
    };
  }
  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
};
export { MyButton };

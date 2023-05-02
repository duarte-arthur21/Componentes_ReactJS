const MyText = ({ variation, children }) => {
  let styles = {};

  if (variation === "primary") {
    styles = {
      textAlign: "center",
      color: "#fff1f1",
      fontSize: "28px",
      fontFamily: "Times News Roman",
    };
  } else if (variation === "secondary") {
    styles = {
      textAlign: "center",
      color: "#b81212",
      fontSize: "24px",
      fontFamily: "Arial",
      marginTop: "25px",
    };
  }
  return <p style={styles}>{children}</p>;
};
export { MyText };

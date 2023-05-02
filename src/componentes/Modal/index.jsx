import styled from "styled-components";

const MyModal = ({ props, children, variation }) => {
  let styles = {};

  if (variation === "primary") {
    styles = {
      color: "black",
      position: "fixed",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      justifyContent: "center",
      aligItems: " center",
    };
  } else if (variation === "secondary") {
    styles = {
      backgroundColor: " black",
      color: "blue",
      border: "1px solid blue",
      position: "fixed",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      justifyContent: "center",
      aligItems: " center",
    };
  }

  return (
    <div style={styles}>
      <Container>
        <Children> {children} </Children>
      </Container>
    </div>
  );
};

export { MyModal };

const Container = styled.div`
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Children = styled.div`
  justify-content: center;
  align-items: center;
`;

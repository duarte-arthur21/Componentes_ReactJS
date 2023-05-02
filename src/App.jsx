import { useState } from "react";
import "./App.css";
import { MyModal } from "./componentes/Modal";
import { MyButton } from "./componentes/Button";
import { MyText } from "./componentes/Text";

import styled from "styled-components";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <Wrapper>
      <MyText variation="primary">Utilizando Componentes Reutilizavéis</MyText>
      <div className="card">
        <button onClick={() => toggleModal()}> open Modal</button>
      </div>

      {openModal && (
        <MyModal variation="secondary">
          <Cabmodal>
            <h1>Esses são algums exemplos de componentes Buttons</h1>
          </Cabmodal>

          <Rodmodal>
            <MyButton
              variation="primary"
              type="button"
              onClick={() => {
                toggleModal();
              }}
            >
              Close Modal
            </MyButton>

            <MyButton
              variation="secondary"
              type="button"
              onClick={() => {
                toggleModal();
              }}
            >
              Close Modal
            </MyButton>
          </Rodmodal>
        </MyModal>
      )}
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
`;
const Rodmodal = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
  float: center;
  margin: 70px;
  border-collapse: collapse;
  padding: 8px;
`;
const Cabmodal = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
  float: center;
  justify-content: center;
  text-align: center;
`;

import { observer } from "mobx-react";
import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ThemeContext } from "../../contexts/themeContext";

const StyledWrapper = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  z-index: 99;
  display: flex;
  justify-content: center;
`;
const StyledBody = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 2em;
  background-color: ${(props) => props.theme.backgroundMain};
  position: relative;
  max-height: 85%;
  overflow-y: auto;
  padding-bottom: 3em;
`;

const Modal = observer(({ ModalStore }) => {
  const [theme, toggleTheme, themeStyles] = useContext(ThemeContext);

  if (!ModalStore.isOpen) return null;

  return (
    <ThemeProvider
      theme={themeStyles}
      toggleTheme={toggleTheme}
      themeString={theme}
    >
      <StyledWrapper>
        <StyledBody className="rounded-lg shadow-2xl">
          {ModalStore.modalContent}
        </StyledBody>
      </StyledWrapper>
    </ThemeProvider>
  );
});

export default Modal;

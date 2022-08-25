import { ThemeProvider, GlobalStyle } from "@react95/core";
import { Computer } from "@react95/icons";
import styled from "@xstyled/styled-components";

import { Shortcut, TaskBar } from "./components";

import "@react95/icons/icons.css";

const Desktop = styled.div`
  padding: 10px;
`;

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Desktop>
        <Shortcut icon={Computer} title="My Computer" />
      </Desktop>
      <TaskBar />
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider, GlobalStyle } from "@react95/core";
import { Computer, Network2, Notepad } from "@react95/icons";
import styled from "@xstyled/styled-components";

import { Shortcut, TaskBar } from "./components";

import "@react95/icons/icons.css";

const Desktop = styled.div`
  padding: 10px;
  height: calc(100vh - 30px);
  overflow: auto;
`;

const ShortcutGrid = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;
  row-gap: 30px;
  column-gap: 5px;
  height: 100%;
`;

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Desktop>
        <ShortcutGrid>
          <Shortcut icon={Computer} title="My Computer" />
          <Shortcut icon={Network2} title="Network Neighborhood" />
          <Shortcut icon={Notepad} title="Notepad" />
          <Shortcut icon={Computer} title="My Computer" />
          <Shortcut icon={Network2} title="Network Neighborhood" />
          <Shortcut icon={Notepad} title="Notepad" />
          <Shortcut icon={Computer} title="My Computer" />
          <Shortcut icon={Network2} title="Network Neighborhood" />
          <Shortcut icon={Notepad} title="Notepad" />
          <Shortcut icon={Computer} title="My Computer" />
          <Shortcut icon={Network2} title="Network Neighborhood" />
          <Shortcut icon={Notepad} title="Notepad" />
          <Shortcut icon={Computer} title="My Computer" />
          <Shortcut icon={Network2} title="Network Neighborhood" />
          <Shortcut icon={Notepad} title="Notepad" />
          <Shortcut icon={Computer} title="My Computer" />
          <Shortcut icon={Network2} title="Network Neighborhood" />
          <Shortcut icon={Notepad} title="Notepad" />
          <Shortcut icon={Computer} title="My Computer" />
          <Shortcut icon={Network2} title="Network Neighborhood" />
          <Shortcut icon={Notepad} title="Notepad" />
        </ShortcutGrid>
      </Desktop>
      <TaskBar />
    </ThemeProvider>
  );
}

export default App;

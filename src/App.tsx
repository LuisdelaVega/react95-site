import { useEffect, useRef } from "react";
import { ThemeProvider, GlobalStyle, Button } from "@react95/core";
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
  const clippyRef = useRef<any>((window as any).CLIPPY);
  const agentRef = useRef<any>();

  useEffect(() => {
    clippyRef.current.load("Clippy", function (agent: any) {
      // Do anything with the loaded agent
      agent.show();
      agentRef.current = agent;
    });
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Desktop>
        <ShortcutGrid>
          <Shortcut icon={Computer} title="My Computer" />
          <Shortcut icon={Network2} title="Network Neighborhood" />
          <Shortcut icon={Notepad} title="Notepad" />
          <Button onClick={() => agentRef.current?.play("Searching")}>
            Hello Clippy!
          </Button>
          ;
        </ShortcutGrid>
      </Desktop>
      <TaskBar />
    </ThemeProvider>
  );
}

export default App;

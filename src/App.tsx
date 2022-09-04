import { Button, GlobalStyle, ThemeProvider } from "@react95/core";
import { Computer, Network2, Notepad } from "@react95/icons";
import "@react95/icons/icons.css";
import styled from "@xstyled/styled-components";
import { Shortcut, TaskBar } from "./components";
import { Devlogs } from "./features/Devlogs";
import { AGENT_NAMES, useClippy } from "./hooks/useClippy";
import { CLIPPY_ANIMATIONS } from "./utils/clippyAnimations";

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
  const { agentRef } = useClippy(AGENT_NAMES.Clippy);

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Desktop>
        <ShortcutGrid>
          <Devlogs />
          <Button
            onClick={() => {
              agentRef.current?.stop();
              agentRef.current?.play(CLIPPY_ANIMATIONS.Print);
            }}
          >
            Hello Clippy!
          </Button>
        </ShortcutGrid>
      </Desktop>
      <TaskBar />
    </ThemeProvider>
  );
}

export default App;

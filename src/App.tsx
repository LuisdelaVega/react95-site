import { Button, GlobalStyle, ThemeProvider } from "@react95/core";
import "@react95/icons/icons.css";
import styled from "@xstyled/styled-components";
import { TaskBar } from "./components";
import { Devlogs } from "./features/Devlogs";
import { AGENT_NAMES, useClippy } from "./hooks/useClippy";
import { CLIPPY_ANIMATIONS } from "./utils/clippyAnimations";
import { ShortcutGrid } from "./utils/styledComponents";

const Desktop = styled(ShortcutGrid)`
  height: calc(100vh - 30px);
`;

function App() {
  const { agentRef } = useClippy(AGENT_NAMES.Clippy);

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Desktop>
        <Devlogs />
        <Button
          onClick={() => {
            agentRef.current?.stop();
            agentRef.current?.play(CLIPPY_ANIMATIONS.Print);
          }}
        >
          Hello Clippy!
        </Button>
      </Desktop>
      <TaskBar />
    </ThemeProvider>
  );
}

export default App;

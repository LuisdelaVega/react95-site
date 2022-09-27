import {
  Button,
  GlobalStyle as React95GlobalStyle,
  ThemeProvider,
} from "@react95/core";
import "@react95/icons/icons.css";
import styled, { createGlobalStyle } from "@xstyled/styled-components";

import { TaskBar } from "./components";
import { Documents } from "./features/Documents";
import { AGENT_NAMES, useClippy } from "./hooks";
import { CLIPPY_ANIMATIONS } from "./utils/clippyAnimations";
import { ShortcutGrid } from "./utils/styledComponents";

const Desktop = styled(ShortcutGrid)`
  height: calc(100vh - 30px);

  ::after {
    position: fixed;
    bottom: calc(50vh - 150px + 30px);
    right: calc(50vw - 375px);
    content: url("./img/alert.png");
    z-index: -1;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const App: React.FC = () => {
  const { agentRef } = useClippy(AGENT_NAMES.Clippy);

  return (
    <ThemeProvider>
      <React95GlobalStyle />
      <GlobalStyle />
      <Desktop>
        <Documents />
        <Button
          onClick={() => {
            // agentRef.current?.play(CLIPPY_ANIMATIONS.Print);
            agentRef.current?.speak(
              "Hello! I'm Actor_0.8.2alpha, and on behalf of everyone at CompCorp Inc. I want to give you a warm welcome.",
              false,
              (complete) => {
                alert("Hey, that's pretty good!");
                complete();
              }
            );
          }}
        >
          Hello Clippy!
        </Button>
      </Desktop>
      <TaskBar />
    </ThemeProvider>
  );
};

export default App;

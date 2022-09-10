import { Button, GlobalStyle, ThemeProvider } from "@react95/core";
import "@react95/icons/icons.css";
import styled from "@xstyled/styled-components";
import { TaskBar } from "./components";
import { Documents } from "./features/Documents";
import { AGENT_NAMES, useClippy } from "./hooks";
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
        <Documents />
        <Documents />
        <Documents />
        <Button
          onClick={() => {
            agentRef.current?.play(CLIPPY_ANIMATIONS.Print);
            agentRef.current?.speak("ℍ𝕖𝕝𝕝𝕠 𝕥𝕖𝕩𝕥 𝕤𝕥𝕣𝕚𝕟𝕘 𝕞𝕪 𝕠𝕝𝕕 𝕗𝕣𝕚𝕖𝕟𝕕.");
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

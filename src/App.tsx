import { Button, Frame, GlobalStyle, ThemeProvider } from "@react95/core";
import { Folder } from "@react95/icons";
import "@react95/icons/icons.css";
import styled from "@xstyled/styled-components";
import { TaskBar } from "./components";
import { Devlogs } from "./features/Devlogs";
import { AGENT_NAMES, useClippy, useShortcut } from "./hooks";
import { CLIPPY_ANIMATIONS } from "./utils/clippyAnimations";
import { MODAL_PROPS } from "./utils/constants";
import { ShortcutGrid } from "./utils/styledComponents";

const Desktop = styled(ShortcutGrid)`
  height: calc(100vh - 30px);
`;

function App() {
  const { agentRef } = useClippy(AGENT_NAMES.Clippy);
  const {
    isModalOpen,
    ModalComponent: TestModal,
    ShortcutComponent: TestShortcut,
  } = useShortcut({ icon: Folder, title: "Test" });

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
        <TestShortcut />
        {isModalOpen && (
          <TestModal {...MODAL_PROPS}>
            <Frame
              bg="white"
              boxShadow="in"
              h="100%"
              w="100%"
              padding="0px 5px"
              overflowY="auto"
            ></Frame>
          </TestModal>
        )}
      </Desktop>
      <TaskBar />
    </ThemeProvider>
  );
}

export default App;

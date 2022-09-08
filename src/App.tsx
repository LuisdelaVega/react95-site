import { Button, Frame, GlobalStyle, ThemeProvider } from "@react95/core";
import { Folder } from "@react95/icons";
import "@react95/icons/icons.css";
import styled, { text } from "@xstyled/styled-components";
import React from "react";
import { TaskBar } from "./components";
import { Devlogs } from "./features/Devlogs";
import {
  AGENT_NAMES,
  IUseShortcutResult,
  useClippy,
  useShortcut,
} from "./hooks";
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

  const test: IUseShortcutResult[] = [];

  for (let index = 0; index < 5; index++) {
    test.push(useShortcut({ icon: Folder, title: "Test 2" }));
  }

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
        {test.map(
          (
            { isModalOpen: isOpen, ShortcutComponent, ModalComponent },
            index
          ) => (
            <React.Fragment key={index}>
              <ShortcutComponent />
              {isOpen && (
                <ModalComponent {...MODAL_PROPS}>
                  <Frame
                    bg="white"
                    boxShadow="in"
                    h="100%"
                    w="100%"
                    padding="0px 5px"
                    overflowY="auto"
                  ></Frame>
                </ModalComponent>
              )}
            </React.Fragment>
          )
        )}
      </Desktop>
      <TaskBar />
    </ThemeProvider>
  );
}

export default App;

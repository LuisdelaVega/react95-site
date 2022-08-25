import { List, TaskBar as React95TaskBar } from "@react95/core";
import { WindowsExplorer } from "@react95/icons";

import { Window } from "./Window";
import { useModalToggle } from "../hooks/useModalToggle";

export const TaskBar = () => {
  const [isWinExplorerOpen, openWinExplorer, closeWinExplorer] =
    useModalToggle(false);

  return (
    <>
      {isWinExplorerOpen && (
        <Window
          handleCloseModal={closeWinExplorer}
          icon={WindowsExplorer}
          title="Windows Explorer"
        />
      )}

      <React95TaskBar
        list={
          <List>
            <List.Item
              icon={<WindowsExplorer variant="32x32_4" />}
              onClick={openWinExplorer}
            >
              Windows Explorer
            </List.Item>
          </List>
        }
      />
    </>
  );
};

import { List, TaskBar as React95TaskBar } from "@react95/core";
import { WindowsExplorer } from "@react95/icons";
import { useModalToggle } from "../hooks/useModalToggle";
import { Window } from "./Window";

export const TaskBar: React.FC = () => {
  const {
    isModalOpen: isWinExplorerOpen,
    openModal: openWinExplorer,
    closeModal: closeWinExplorer,
  } = useModalToggle(false);

  return (
    <>
      {isWinExplorerOpen && (
        // TODO Switch this use of Window for a Modal or a component that wraps it.
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

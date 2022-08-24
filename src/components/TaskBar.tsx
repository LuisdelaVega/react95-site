import { useState } from "react";
import { List, Modal, TaskBar as React95TaskBar } from "@react95/core";
import { WindowsExplorer } from "@react95/icons";

export const TaskBar = () => {
  const [first, toggleFirst] = useState(false);

  return (
    <>
      {first && (
        <Modal
          icon={<WindowsExplorer variant="16x16_4" />}
          title="Windows Explorer"
          closeModal={() => toggleFirst(false)}
          width="300"
          height="200"
        />
      )}

      <React95TaskBar
        list={
          <List>
            <List.Item
              icon={<WindowsExplorer variant="32x32_4" />}
              onClick={() => toggleFirst(true)}
            >
              Windows Explorer
            </List.Item>
          </List>
        }
      />
    </>
  );
};

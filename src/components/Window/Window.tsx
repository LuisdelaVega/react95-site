import { FC } from "react";
import { Frame, List, Modal } from "@react95/core";

import classes from "./Window.module.css";

import { IIconComponent } from "../../utils/interfaces";

interface IWindow {
  handleCloseModal: () => void;
  icon: IIconComponent;
  title: string;
}

export const Window: FC<IWindow> = ({
  handleCloseModal,
  icon: Icon,
  title,
}) => {
  // TODO This is a placeholder for buttons
  const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) =>
    alert(e.currentTarget.value);

  return (
    <Modal
      className={classes.Window}
      width="300"
      height="200"
      icon={<Icon variant="16x16_4" />}
      title={title}
      defaultPosition={{
        x: 0,
        y: 20,
      }}
      closeModal={handleCloseModal}
      buttons={[
        { value: "Ok", onClick: handleButtonClick },
        { value: "Cancel", onClick: handleButtonClick },
      ]}
      menu={[
        {
          name: "File",
          list: (
            <List>
              <List.Item onClick={handleCloseModal}>Exit</List.Item>
            </List>
          ),
        },
        {
          name: "Edit",
          list: (
            <List>
              <List.Item>Copy</List.Item>
            </List>
          ),
        },
      ]}
    >
      <Frame
        bg="white"
        boxShadow="in"
        h="100%"
        w="100%"
        padding="0px 5px"
        overflowY="auto"
      >
        <p>
          The active modal will be based on the order they render, most recently
          rendered will be the active component. On click of a non-active modal
          will fire an action to set that modal as the active one.
        </p>
        <p>
          The active modal will be based on the order they render, most recently
          rendered will be the active component. On click of a non-active modal
          will fire an action to set that modal as the active one.
        </p>
      </Frame>
    </Modal>
  );
};

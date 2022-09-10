// TODO Delete this component
import { Frame, List, Modal } from "@react95/core";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as Posts from "../../assets/Devlogs";
import { IIconComponent } from "../../types/interfaces";
import classes from "./Window.module.css";

interface IWindow {
  handleCloseModal: () => void;
  icon: IIconComponent;
  title: string;
}

/**
 * @deprecated
 *
 * DO NOT USE THIS COMPONENT. IT WILL BE DELETED SOON
 * @param param0
 * @returns
 */
export const Window: React.FC<IWindow> = ({
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
      width="550"
      height="500"
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
        <ReactMarkdown children={Posts.Devlog_0} remarkPlugins={[remarkGfm]} />
      </Frame>
    </Modal>
  );
};

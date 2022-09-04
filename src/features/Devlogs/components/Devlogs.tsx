import { Frame, List, Modal } from "@react95/core";
import { Folder } from "@react95/icons";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import * as Posts from "../../../assets/posts";
import { Shortcut } from "../../../components";
import { useModalToggle } from "../../../hooks/useModalToggle";
import classes from "./Devlogs.module.css";

const TITLE = "Devlogs";

const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) =>
  alert(e.currentTarget.value);

export const Devlogs: React.FC<any> = () => {
  const { closeModal, ...shortcutProps } = useModalToggle(false);
  return (
    /* TODO Move this into another component and modify it to be like Windows Explorer. It needs to iterate over the list of Devlogs, use the name of the devlog as the title for the shortcut, and the contents for the modal child */
    <Shortcut
      title={TITLE}
      icon={Folder}
      closeModal={closeModal}
      {...shortcutProps}
    >
      <Modal
        className={classes.Window}
        width="550"
        height="500"
        icon={<Folder variant="16x16_4" />}
        title={TITLE}
        defaultPosition={{
          x: 0,
          y: 20,
        }}
        closeModal={closeModal}
        buttons={[
          { value: "Ok", onClick: handleButtonClick },
          { value: "Cancel", onClick: handleButtonClick },
        ]}
        menu={[
          {
            name: "Edit",
            list: (
              <List>
                <List.Item>Copy</List.Item>
              </List>
            ),
          },
          {
            name: "Window",
            list: (
              <List>
                <List.Item onClick={closeModal}>Exit</List.Item>
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
          <ReactMarkdown
            children={Posts.Devlog_0}
            remarkPlugins={[remarkGfm]}
          />
        </Frame>
      </Modal>
    </Shortcut>
  );
};

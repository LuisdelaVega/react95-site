import { Frame, List } from "@react95/core";
import { Folder } from "@react95/icons";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import * as Posts from "../../../assets/posts";
import { Shortcut } from "../../../components";
import classes from "./Devlogs.module.css";

const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) =>
  alert(e.currentTarget.value);

const MODAL_PROPS = {
  className: classes.Window,
  width: "550",
  height: "500",
  defaultPosition: {
    x: 0,
    y: 20,
  },
  // buttons: [
  //   { value: "Ok", onClick: handleButtonClick },
  //   { value: "Cancel", onClick: handleButtonClick },
  // ],
  menu: [
    {
      name: "File",
      list: (
        <List>
          <List.Item>Copy</List.Item>
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
    {
      name: "View",
      list: (
        <List>
          <List.Item>Copy</List.Item>
        </List>
      ),
    },
    {
      name: "Help",
      list: (
        <List>
          <List.Item>Copy</List.Item>
        </List>
      ),
    },
  ],
};

export const Devlogs: React.FC<any> = () => {
  return (
    /* TODO Move this into another component and modify it to be like Windows Explorer. It needs to iterate over the list of Devlogs, use the name of the devlog as the title for the shortcut, and the contents for the modal child */
    <Shortcut title="Devlogs" icon={Folder} modalProps={MODAL_PROPS}>
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
    </Shortcut>
  );
};

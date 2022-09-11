import { List } from "@react95/core";
import { IModalProps } from "../types/interfaces";
import classes from "./Window.module.css";

export const COMMON_MODAL_PROPS: IModalProps = {
  className: classes.Window,
  defaultPosition: {
    x: 20,
    y: 20,
  },
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

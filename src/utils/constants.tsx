import { List } from "@react95/core";
import classes from "./Window.module.css";

export const MODAL_PROPS = {
  className: classes.Window,
  defaultPosition: {
    x: 0,
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

import { TreeProps } from "@react95/core/@types/Tree/Tree";
import { ReactNode } from "react";

import { COMMON_MODAL_PROPS } from "../../utils/constants";
import { IShortcut, Shortcut } from "../Shortcut";
import { TreeFrame } from "./TreeFrame";

interface ITreeDirectory extends Pick<IShortcut, "modalProps"> {
  content?: ReactNode;
  shortcutProps: Omit<IShortcut, "modalProps" | "children">;
  treeNodes: TreeProps;
}

export const TreeDirectory: React.FC<ITreeDirectory> = ({
  shortcutProps,
  content,
  modalProps = {},
  treeNodes,
}) => {
  return (
    <Shortcut
      modalProps={{ ...COMMON_MODAL_PROPS, ...modalProps }}
      {...shortcutProps}
    >
      <TreeFrame treeNodes={treeNodes} content={content} />
    </Shortcut>
  );
};

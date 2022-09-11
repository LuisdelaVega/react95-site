import { ModalProps } from "@react95/core/@types/Modal/Modal";

// TODO Type this better
export interface IIconComponent extends React.FC<any> {}

export interface IModalProps
  extends Omit<ModalProps, "closeModal" | "icon" | "title"> {}

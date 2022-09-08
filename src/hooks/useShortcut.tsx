import { Modal } from "@react95/core";
import { ModalProps } from "@react95/core/@types/Modal/Modal";
import styled from "@xstyled/styled-components";
import { ReactElement } from "react";
import { IIconComponent } from "../types/interfaces";
import { useModalToggle } from "./useModalToggle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  width: 75px;
  height: 50px;

  span {
    text-align: center;
    color: ${(props) => props.color || "white"};
  }
`;

interface IUseShortcut {
  icon: IIconComponent;
  title: string;
}

interface IShortcut {
  textColor?: string;
}

interface IModal extends Omit<ModalProps, "closeModal" | "icon" | "title"> {
  children: ReactElement;
}

export interface IUseShortcutResult {
  isModalOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  ShortcutComponent: React.FC<IShortcut>;
  ModalComponent: React.FC<IModal>;
}

export function useShortcut({
  icon: Icon,
  title,
}: IUseShortcut): IUseShortcutResult {
  const { isModalOpen, closeModal, openModal } = useModalToggle(false);

  const ShortcutComponent: React.FC<IShortcut> = ({ textColor }) => (
    <Wrapper onClick={openModal} color={textColor}>
      <Icon variant="32x32_4" />
      <span>{title}</span>
    </Wrapper>
  );

  const ModalComponent: React.FC<IModal> = ({ children, ...modalProps }) => (
    <>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          icon={<Icon variant="16x16_4" />}
          title={title}
          {...modalProps}
        >
          {children}
        </Modal>
      )}
    </>
  );

  return {
    isModalOpen,
    closeModal,
    openModal,
    ShortcutComponent,
    ModalComponent,
  };
}

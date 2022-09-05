import { Modal } from "@react95/core";
import { ModalProps } from "@react95/core/@types/Modal/Modal";
import styled from "@xstyled/styled-components";
import { ReactElement } from "react";
import { useModalToggle } from "../../hooks/useModalToggle";
import { IIconComponent } from "../../types/interfaces";

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

interface IShortcut {
  children: ReactElement;
  textColor?: string;
  icon: IIconComponent;
  title: string;
  modalProps?: Omit<ModalProps, "closeModal" | "icon" | "title">;
}

export const Shortcut: React.FC<IShortcut> = ({
  children,
  textColor = "white",
  icon: Icon,
  modalProps = {},
  title,
}) => {
  const { isModalOpen, closeModal, openModal } = useModalToggle(false);

  return (
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

      <Wrapper onClick={openModal} color={textColor}>
        <Icon variant="32x32_4" />
        <span>{title}</span>
      </Wrapper>
    </>
  );
};

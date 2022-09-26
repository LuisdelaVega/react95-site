import { Modal } from "@react95/core";
import styled from "@xstyled/styled-components";
import { ReactElement } from "react";

import { useModalToggle } from "../../hooks/useModalToggle";
import { IIconComponent, IModalProps } from "../../types/interfaces";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  width: 75px;
  height: 50px;

  span {
    text-align: center;
    color: ${(props) => props.color ?? "white"};
  }
`;

// TODO Add a `disabed` prop that removes the onClick and turns the icons grey or transparent
export interface IShortcut {
  children: ReactElement;
  defaultOpen?: boolean;
  icon: IIconComponent;
  modalProps?: IModalProps;
  textColor?: string;
  title: string;
}

export const Shortcut: React.FC<IShortcut> = ({
  children,
  defaultOpen,
  textColor,
  icon: Icon,
  modalProps = {},
  title,
}) => {
  const { isModalOpen, closeModal, openModal } = useModalToggle(
    defaultOpen ?? false
  );

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

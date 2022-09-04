import React, { ReactElement } from "react";
import styled from "@xstyled/styled-components";
import { useModalToggle } from "../hooks/useModalToggle";
import { IIconComponent } from "../types/interfaces";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  width: 75px;
  height: 50px;

  span {
    text-align: center;
    color: white;
  }
`;

interface IShortcut {
  children: ReactElement;
  closeModal: () => void;
  icon: IIconComponent;
  isModalOpen: boolean;
  openModal: () => void;
  title: string;
}

export const Shortcut: React.FC<IShortcut> = ({
  children,
  closeModal,
  icon: Icon,
  isModalOpen,
  openModal,
  title,
}) => {
  return (
    <>
      {isModalOpen && React.cloneElement(children, { closeModal })}

      <Wrapper onClick={openModal}>
        <Icon variant="32x32_4" />
        <span>{title}</span>
      </Wrapper>
    </>
  );
};

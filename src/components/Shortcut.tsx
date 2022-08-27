import { FC } from "react";
import styled from "@xstyled/styled-components";

import { IIconComponent } from "../utils/interfaces";
import { useModalToggle } from "../hooks/useModalToggle";
import { Window } from "./Window";

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
  icon: IIconComponent;
  title: string;
}

export const Shortcut: FC<IShortcut> = (props) => {
  const { icon: Icon, title } = props;
  const [isModalOpen, openModal, closeModal] = useModalToggle(false);

  return (
    <>
      {isModalOpen && <Window handleCloseModal={closeModal} {...props} />}

      <Wrapper onClick={openModal}>
        <Icon variant="32x32_4" />
        <span>{title}</span>
      </Wrapper>
    </>
  );
};

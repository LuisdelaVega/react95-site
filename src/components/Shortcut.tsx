import { FC } from "react";
import styled from "@xstyled/styled-components";

import { IIconComponent } from "../utils/interfaces";
import { useModalToggle } from "../hooks/useModalToggle";
import { Window } from "./Window";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  row-gap: 5px;
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

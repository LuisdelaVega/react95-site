import { FC, useState } from "react";
import { Frame, List, Modal } from "@react95/core";
import styled from "styled-components";

import { IIconComponent } from "../utils/interfaces";
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
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      {openModal && <Window handleCloseModal={handleCloseModal} {...props} />}

      <Wrapper onClick={handleOpenModal}>
        <Icon variant="32x32_4" />
        <span>{title}</span>
      </Wrapper>
    </>
  );
};

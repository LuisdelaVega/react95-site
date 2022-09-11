import { Frame, Tree } from "@react95/core";
import { TreeProps } from "@react95/core/@types/Tree/Tree";
import { styled } from "@xstyled/styled-components";
import { ReactNode } from "react";

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  column-gap: 5px;
  grid-template: 1fr / 25% 1fr;
  > div:first-child > ul {
    margin-top: 0px;
  }
`;

interface ITreeFrame {
  treeNodes: TreeProps;
  content: ReactNode;
}

export const TreeFrame: React.FC<ITreeFrame> = ({ treeNodes, content }) => {
  return (
    <Wrapper>
      <Frame
        bg="white"
        boxShadow="in"
        h="100%"
        w="100%"
        padding="0px 5px"
        overflowY="auto"
      >
        <Tree {...treeNodes} />
      </Frame>
      <Frame
        bg="white"
        boxShadow="in"
        h="100%"
        w="100%"
        padding="0px 5px"
        overflowY="auto"
      >
        {content}
      </Frame>
    </Wrapper>
  );
};

import { Frame, Tree } from "@react95/core";
import { TreeProps } from "@react95/core/@types/Tree/Tree";
import { styled } from "@xstyled/styled-components";
import { ReactNode } from "react";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const TreeView = styled.div`
  overflow: auto;
  width: 25%;
`;

const ContentView = styled(TreeView)`
  width: 75%;
`;

interface ITreeFrame {
  treeNodes: TreeProps;
  content: ReactNode;
}

export const TreeFrame: React.FC<ITreeFrame> = ({ treeNodes, content }) => {
  return (
    <Wrapper>
      <TreeView>
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
      </TreeView>
      <ContentView>
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
      </ContentView>
    </Wrapper>
  );
};

import { useRef, useEffect } from "react";

export enum AGENT_NAMES {
  Clippy = "Clippy",
}

interface IAgent {
  animations: () => string[];
  hide: () => void;
  play: (animationName: string) => void;
  show: () => void;
  stop: () => void;
}

interface IClippy {
  load: (agentName: AGENT_NAMES, callback: (agent: IAgent) => void) => void;
}

export function useClippy(agentName: AGENT_NAMES) {
  const clippyRef = useRef<IClippy>((window as any).CLIPPY);
  const agentRef = useRef<IAgent>();

  useEffect(() => {
    clippyRef.current.load(agentName, function (agent) {
      agent.show();
      // console.log(agent.animations());
      agentRef.current = agent;
    });

    return () => agentRef.current?.hide();
  }, []);

  return { clippyRef, agentRef };
}

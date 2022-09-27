import { useEffect, useRef } from "react";

export enum AGENT_NAMES {
  Clippy = "Clippy",
}

interface IAgent {
  animations: () => string[];
  hide: () => void;
  play: (animationName: string) => void;
  show: () => void;
  speak: (message: string, hold: boolean, callback: (complete: () => void) => void) => void;
  stop: () => void;
}

interface IClippy {
  load: (agentName: AGENT_NAMES, callback: (agent: IAgent) => void) => void;
}

export function useClippy(agentName: AGENT_NAMES): {
  clippyRef: React.MutableRefObject<IClippy>;
  agentRef: React.MutableRefObject<IAgent | undefined>;
} {
  const clippyRef = useRef<IClippy>((window as any).CLIPPY);
  const agentRef = useRef<IAgent>();

  useEffect(() => {
    clippyRef.current.load(agentName, function (agent) {
      agent.show();
      // console.log(agent.animations());
      agentRef.current = agent;
    });

    return () => agentRef.current?.hide();
  }, [agentName]);

  return { clippyRef, agentRef };
}

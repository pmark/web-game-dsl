interface StateMachineProps {
  id: string;
  onWillEnterState?: () => void;
  onDidEnterState?: () => void;
  onWillExitState?: () => void;
  onDidExitState?: () => void;
  children: React.ReactNode;  // Assuming a JSX-like environment for illustrative purposes
}

const StateMachine: React.FC<StateMachineProps> = ({
  id,
  onWillEnterState,
  onDidEnterState,
  onWillExitState,
  onDidExitState,
  children
}) => {
  // Implementation details here
  return <div>{children}</div>;
};

interface StateProps {
  id: string;
  sceneId: string;
  uiId: string;
  onWillEnter?: () => void;
  onDidEnter?: () => void;
  onWillExit?: () => void;
  onDidExit?: () => void;
}

const State: React.FC<StateProps> = ({
  id,
  sceneId,
  uiId,
  onWillEnter,
  onDidEnter,
  onWillExit,
  onDidExit
}) => {
  // Implementation details here
  return null;  // As it doesn't need to render anything itself
};


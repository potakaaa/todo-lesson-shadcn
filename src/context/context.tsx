import React, { createContext, useState, ReactNode, useContext } from "react";

export type ToDo = {
  id: number;
  name: string;
  done: boolean;
};

interface GlobalStates {
  toDo: ToDo[];
  setToDo: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

export const GlobalContext = createContext<GlobalStates | undefined>(undefined);

interface GlobalStateProviderProps {
  children: ReactNode;
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
  children,
}) => {
  const [toDo, setToDo] = useState<ToDo[]>([]);

  return (
    <GlobalContext.Provider value={{ toDo, setToDo }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = (): GlobalStates => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

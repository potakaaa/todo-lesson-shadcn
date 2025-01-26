import { useEffect } from "react";
import TodoContainer from "./components/TodoContainer";
import { useGlobalState } from "./context/context";

const App = () => {
  const { toDo } = useGlobalState();

  useEffect(() => {
    console.log(toDo);
  }, [toDo]);

  return (
    <div className="w-full h-screen flex flex-col space-y-10 justify-center items-center">
      <h1 className="font-bold text-3xl">My Todo List</h1>
      <TodoContainer />
    </div>
  );
};

export default App;

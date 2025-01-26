import TodoContainer from "./components/TodoContainer";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col space-y-10 justify-center items-center">
      <h1 className="font-bold text-3xl">My Todo List</h1>
      <TodoContainer />
    </div>
  );
};

export default App;

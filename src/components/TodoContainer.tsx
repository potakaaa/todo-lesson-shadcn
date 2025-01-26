import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  return (
    <div className="w-2/3 border border-zinc-400 h-[80%] rounded-xl p-5 space-y-3">
      <TodoItem />
      <AddTodo />
    </div>
  );
};

export default TodoContainer;

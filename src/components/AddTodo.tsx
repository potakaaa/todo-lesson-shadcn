import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ToDo, useGlobalState } from "@/context/context";
import { useState } from "react";

const AddTodo = () => {
  const { toDo, setToDo } = useGlobalState();

  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    const toDoItem: ToDo = {
      id: Date.now(),
      name: input,
      done: false,
    };

    console.log([...toDo]);

    setToDo([...toDo, toDoItem]);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-full text-lg">+</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Input
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Button className="w-full text-lg" onClick={addTodo}>
          +
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default AddTodo;

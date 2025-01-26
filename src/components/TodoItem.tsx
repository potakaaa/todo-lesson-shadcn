import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { ToDo, useGlobalState } from "@/context/context";
import { useState } from "react";

const TodoItem = () => {
  const { toDo, setToDo } = useGlobalState();
  const [input, setInput] = useState<string>();

  const handleEdit = (id: number) => {
    setToDo(
      toDo.map((item) =>
        item.id === id
          ? { ...item, name: input || item.name }
          : { ...item, name: item.name }
      )
    );
  };

  const handleDelete = (id: number) => {
    setToDo(toDo.filter((item) => item.id !== id));
  };

  return (
    <div>
      {toDo.map((item: ToDo) => (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="w-full h-12 text-base">
              {item.name}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{item.name}</AlertDialogTitle>
              <AlertDialogDescription>
                <Input
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Edit your task"
                  defaultValue={item.name}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  handleDelete(item.id);
                }}
                className="bg-destructive"
              >
                Delete
              </AlertDialogAction>
              <AlertDialogAction
                onClick={() => {
                  handleEdit(item.id);
                }}
              >
                Save
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ))}
    </div>
  );
};

export default TodoItem;

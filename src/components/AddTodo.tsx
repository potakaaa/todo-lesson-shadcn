import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const AddTodo = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-full text-lg">+</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Input />
      </PopoverContent>
    </Popover>
  );
};

export default AddTodo;

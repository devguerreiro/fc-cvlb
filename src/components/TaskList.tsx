import { Task } from "@/types/task";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggle: (id: number, completed: boolean) => void;
}

export default function TaskList({ tasks, onDelete, onToggle }: Props) {
  return (
    <div className="grid gap-4 mt-6">
      {tasks.map((task) => (
        <Card key={task.id} className="shadow-sm">
          <CardContent className="p-4 flex flex-col gap-2">
            <div className="flex items-center">
              <label
                htmlFor="toggle"
                className={`w-full text-xl font-semibold ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.title}
              </label>
              <Checkbox
                id="toggle"
                checked={task.completed}
                onCheckedChange={() => onToggle(task.id, !task.completed)}
              />
            </div>
            <p className="text-sm text-gray-600">{task.description}</p>
            <Button variant="destructive" onClick={() => onDelete(task.id)}>
              Excluir
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

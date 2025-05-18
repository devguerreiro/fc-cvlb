import { Task } from "@/types/task";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  tasks: Task[];
  onDelete: (id: number) => void;
}

export default function TaskList({ tasks, onDelete }: Props) {
  return (
    <div className="grid gap-4 mt-6">
      {tasks.map((task) => (
        <Card key={task.id} className="shadow-sm">
          <CardContent className="p-4 flex flex-col gap-2">
            <h2 className="text-xl font-semibold">{task.title}</h2>
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

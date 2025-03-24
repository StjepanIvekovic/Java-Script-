import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Trash, CheckCircle } from "lucide-react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <Card key={index} className="flex justify-between items-center p-2">
            <div
              className={`flex-1 ${task.completed ? "line-through text-gray-500" : ""}`}
            >
              {task.text}
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" onClick={() => toggleTask(index)}>
                <CheckCircle className={`w-5 h-5 ${task.completed ? "text-green-500" : "text-gray-400"}`} />
              </Button>
              <Button variant="ghost" onClick={() => removeTask(index)}>
                <Trash className="w-5 h-5 text-red-500" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

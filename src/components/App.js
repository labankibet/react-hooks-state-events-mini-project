import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredTasks(TASKS);
    } else {
      const filtered = TASKS.filter((task) => task.category === category);
      setFilteredTasks(filtered);
    }
  };

  const handleTaskFormSubmit = (task) => {
    // Add the new task to the filtered list
    setFilteredTasks([...filteredTasks, task]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;

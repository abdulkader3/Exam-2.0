import React, { useState } from 'react';

function TodoList() {
  const [showTasks, toggleTasks] = useState(false);
  const [showCategories, toggleCategories] = useState(false);

  // Task details
  const [taskInput, updateTaskInput] = useState('');
  const [categoryInput, updateCategoryInput] = useState('');
  const [taskError, setTaskError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  
  // Categories and task storage
  const [tasks, setTasks] = useState({});
  const [categories, setCategories] = useState(['General']);
  const [selectedCategory, selectCategory] = useState('General');

  // Toggle display of tasks within selected category
  const toggleTaskView = () => {
    toggleTasks(!showTasks);
  };

  // Toggle display of categories under top-right bar icon
  const toggleCategoryDisplay = () => {
    toggleCategories(!showCategories);
  };

  // Add new task in the selected category
  const addTask = () => {
    if (!taskInput.trim()) {
      setTaskError("Task cannot be empty");
      return;
    }
    setTasks(prev => ({
      ...prev,
      [selectedCategory]: [
        ...(prev[selectedCategory] || []),
        { text: taskInput, completed: false }
      ]
    }));
    updateTaskInput('');
    setTaskError('');
  };

  // Complete or undo completion of a task
  const completeTask = (index) => {
    setTasks(prev => ({
      ...prev,
      [selectedCategory]: prev[selectedCategory].map((task, i) => 
        i === index ? { ...task, completed: !task.completed } : task
      )
    }));
  };

  // Delete a task
  const deleteTask = (index) => {
    setTasks(prev => ({
      ...prev,
      [selectedCategory]: prev[selectedCategory].filter((_, i) => i !== index)
    }));
  };

  // Add new category
  const addCategory = () => {
    if (!categoryInput.trim()) {
      setCategoryError("Category name is required");
      return;
    }
    if (categories.includes(categoryInput)) {
      setCategoryError("Category already exists");
      return;
    }
    setCategories([categoryInput, ...categories]);
    setTasks(prev => ({ ...prev, [categoryInput]: [] }));
    updateCategoryInput('');
    setCategoryError('');
  };

  // Get total task count for all categories
  const getTotalTaskCount = () => {
    return Object.values(tasks).reduce((count, catTasks) => count + catTasks.length, 0);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
      {/* Header */}
      <header className="w-full max-w-xl flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-blue-600 text-center w-full">
          To-Do List
        </h1>
        
        {/* Top-right Category Display */}
        <div className="relative">
          <button onClick={toggleCategoryDisplay} className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center">
            {showCategories ? '▲' : '☰'} {getTotalTaskCount()}
          </button>
          {showCategories && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
              {categories.map(category => (
                <button 
                  key={category}
                  onClick={() => selectCategory(category)}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                >
                  {category} <span className="text-blue-600">({tasks[category] ? tasks[category].length : 0})</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Category Add Section */}
      <div className="w-full max-w-xl mb-4">
        <button onClick={() => toggleTasks(!showTasks)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
          {showTasks ? 'Hide Categories' : 'Add Category'}
        </button>
        
        {/* Category Input */}
        {showTasks && (
          <div className="flex mt-2">
            <input 
              type="text" 
              value={categoryInput}
              onChange={(e) => updateCategoryInput(e.target.value)}
              placeholder="Enter category name..."
              className="p-2 border border-gray-300 rounded-l-lg w-3/4"
            />
            <button onClick={addCategory} className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-500">
              Add
            </button>
            {categoryError && <span className="text-red-500 ml-2">{categoryError}</span>}
          </div>
        )}
      </div>

      {/* Task Input */}
      <div className="w-full max-w-xl flex mb-4">
        <input 
          type="text" 
          value={taskInput}
          onChange={(e) => updateTaskInput(e.target.value)}
          placeholder={`Add a task to ${selectedCategory}...`}
          className="flex-grow p-2 border border-gray-300 rounded-l-lg"
        />
        <button onClick={addTask} className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-500">
          Add Task
        </button>
        {taskError && <span className="text-red-500 ml-2">{taskError}</span>}
      </div>

      {/* Task List */}
      <div className="w-full max-w-xl space-y-4">
        {tasks[selectedCategory] && tasks[selectedCategory].length > 0 ? (
          tasks[selectedCategory].map((task, index) => (
            <div key={index} className={`flex items-center justify-between p-4 rounded-lg shadow ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
              <span className={`${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                {task.text}
              </span>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => completeTask(index)} 
                  className={`text-sm px-2 py-1 rounded ${task.completed ? 'bg-orange-200 text-orange-700' : 'bg-green-200 text-green-700'}`}
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => deleteTask(index)} className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No tasks in {selectedCategory}.</p>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-8 text-gray-400 text-sm">
        &copy; 2024 Todo List
      </footer>
    </div>
  );
}

export default TodoList;

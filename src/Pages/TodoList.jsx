import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Adds a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Toggles the completion status of a task
  const toggleCompletion = (index) => {
    setTasks(tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task));
  };

  // Deletes a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
      {/* Header Section */}
      <header className="w-full max-w-xl text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">My To-Do List</h1>
        <p className="text-gray-500">Manage your tasks efficiently</p>
      </header>

      {/* Input Section */}
      <div className="w-full max-w-xl flex mb-4">
        <input 
          type="text" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-400"
        />
        <button onClick={addTask} className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-500">
          Add Task
        </button>
      </div>

      {/* Task List Section */}
      <div className="w-full max-w-xl space-y-4">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-4 rounded-lg shadow ${
                task.completed ? 'bg-green-100' : 'bg-white'
              }`}
            >
              {/* Task Text */}
              <span className={`${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                {task.text}
              </span>
              
              {/* Task Action Buttons */}
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => toggleCompletion(index)} 
                  className={`text-sm px-2 py-1 rounded ${
                    task.completed ? 'bg-orange-200 text-orange-700' : 'bg-green-200 text-green-700'
                  }`}
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button 
                  onClick={() => deleteTask(index)} 
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No tasks yet! Add some to get started.</p>
        )}
      </div>

      {/* Footer Section */}
      <footer className="mt-8 text-gray-400 text-sm">
        <p>&copy; 2024 To-Do List. Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default TodoList;

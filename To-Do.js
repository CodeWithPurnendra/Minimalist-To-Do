const express = require('express');
const fs = require('fs'); // Built-in Node module to read/write files
const path = require('path');

const app = express();
const PORT = 3000;
const FILE_PATH = path.join(__dirname, 'tasks.json');

app.use(express.json());
function readTasksFromFile() {
  try {
    const data = fs.readFileSync(FILE_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function saveTasksToFile(tasks) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2), 'utf8');
}

app.get('/tasks', (req, res) => {
  const tasks = readTasksFromFile();
  res.status(200).json(tasks);
});

app.post('/tasks', (req, res) => {
  const title = req.body.title;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const tasks = readTasksFromFile();

  const newTask = {
    id: Date.now(), 
    title: title,
    completed: false
  };

  tasks.push(newTask);
  saveTasksToFile(tasks);

  res.status(201).json(newTask);
});

// 3. UPDATE A TASK
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const tasks = readTasksFromFile();

  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  if (req.body.title !== undefined) task.title = req.body.title;
  if (req.body.completed !== undefined) task.completed = req.body.completed;

  saveTasksToFile(tasks);


  res.status(200).json(task); 
});

// 4. DELETE A TASK
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  let tasks = readTasksFromFile(); 

  const initialLength = tasks.length;
  tasks = tasks.filter(t => t.id !== taskId);

  if (tasks.length === initialLength) {
    return res.status(404).json({ error: 'Task not found' });
  }

  saveTasksToFile(tasks);

  res.status(200).json({ message: 'Task deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/tasks`);
});
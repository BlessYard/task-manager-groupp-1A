const express = require('express');
const router = express.Router();

const tasks = require('../data/tasks')

router.use(express.json());

router.get('/', (req, res) => {
  res.status(200).json(tasks);
});

router.post('/', (req, res) => {
  const newTask = {id: tasks.length + 1, ...req.body};
  tasks.push(newTask);
  res.status(201).json(tasks)
});

router.patch('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const task = tasks.find((t)=> t.id === userId);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  Object.assign(task, req.body); 
  res.status(200).json(tasks);
});

router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const initialLength = tasks.length
    updatedTasks = tasks.filter((t)=> t.id !== userId);
    if (updatedTasks.length === initialLength) return res.status(404).json({message: "Task not found"});
    res.status(204).send()
})

module.exports = router;


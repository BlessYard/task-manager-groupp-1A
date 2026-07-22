require("dotenv").config();
const express = require('express'); 
const path = require('path'); // handle file paths safely across  diffeent computers with different OS

// imports the routes 
const taskRoutes = require('./routes/taskRoutes'); 

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json()); // For reading JSON body

// API Routes
app.use('/api/tasks', taskRoutes); 

//home route
app.get('/', (req, res) => {
    res.json({ message: "Task Manager API is running successfully" });
});

app.listen(PORT, () => {
    console.log(`APP is listtening on port ${PORT}`);
});
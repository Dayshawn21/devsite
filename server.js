const express = require('express');
const mongoose = require('mongoose');

const user = require('./routes/api/user')
const profile = require('./routes/api/profile')
const post = require('./routes/api/post')


const app = express();
//DB Config
const db = require('./config/key').mongoURI;

//connected to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
app.get('/', (req, res) => res.send('Hello World'));

// Use Routes
app.use('/api/user', user)
app.use('/api/profile', profile)
app.use('/api/post', post)

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
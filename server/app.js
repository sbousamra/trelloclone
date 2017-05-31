const express = require('express');
const path = require('path');
const lodash = require('lodash');

const app = express(); // ???? wtf ???

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build'))); // What the hell does this do???

var boards = {
  tutorialBoard: {
    name: "Tutorial Board (Start Here!)", important: true
  }
}

function saveBoards(board) {
  lodash.extend(boards, board)
}

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')); 
  // how does this path.resolve work? the directory of index.html is ../public/index.html, where have we specified to return this path?
});

app.post('/', (req, res) => {
  saveBoards(res)
})

app.get('/boards', (req, res) => {
  res.json(boards)
})

app.get('/boards/:id', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
})

app.post('/boards/:id', (req, res) => {
  return console.log("POSTSUCCESS")
})

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`); // What does this listen for on port 9000? aka. what will we return?
});
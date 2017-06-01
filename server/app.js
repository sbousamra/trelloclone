const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const lodash = require('lodash');

const app = express(); // ???? wtf ???

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build'))); // What the hell does this do???
app.use(bodyParser.json())

var boards = {
  tutorialBoard: {
    name: "Tutorial Board (Start Here!)", important: true
  }
}

function randId() {
  return Math.random().toString(36).substr(2, 10);
}

function saveBoard(board) {
  lodash.extend(boards, {[randId()]: board})
}

function saveList(boardId, list) {
  lodash.extend(boards.boardId, {[randId()]: list})
}

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')); 
  // how does this path.resolve work? the directory of index.html is ../public/index.html, where have we specified to return this path?
});

app.post('/boards', (req, res) => {
  saveBoard(req.body)
  res.status(200).json(boards)
})

app.get('/boards', (req, res) => {
  res.json(boards)
})

app.get('/boards/:id', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
})

app.get('/boards/:id/lists', (req, res) => {
  res.json(boards[req.params.id].lists)
})

app.post('/boards/:id/lists', (req, res) => {
  saveList(this.props.params.id, req.body)
  res.status(200).json(boards)
})

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`); // What does this listen for on port 9000? aka. what will we return?
});
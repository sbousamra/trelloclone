const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const lodash = require('lodash');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.json())

var boards = {
  tutorialBoard: {
    name: "Tutorial Board (Start Here!)", lists: {}, important: true
  }
}

function randId() {
  return Math.random().toString(36).substr(2, 10);
}

function saveBoard(board) {
  lodash.extend(boards, {[randId()]: board})
}

function saveList(boardId, list) {
  lodash.extend(boards[boardId].lists, {[randId()]: list})
}

function saveCard(boardId, listId, card) {
  lodash.extend(boards[boardId].lists[listId].cards, {[randId()]: card})
}

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')); 
});

app.post('/boards', (req, res) => {
  saveBoard(req.body)
  res.status(200).json(boards)
})

app.get('/boards', (req, res) => {
  res.json(boards)
})

app.get('/boards/:boardId', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
})

app.get('/boards/:boardId/lists', (req, res) => {
  res.json(boards[req.params.boardId].lists)
})

app.post('/boards/:boardId/lists', (req, res) => {
  saveList(req.params.boardId, req.body)
  res.status(200).json(boards)
})

app.get('/boards/:boardId/lists/:listId/cards', (req, res) => {
  res.json(boards[req.params.boardId].lists[req.params.listId].cards)
})

app.post('/boards/:boardId/lists/:listId/cards', (req, res) => {
  saveCard(req.params.boardId, req.params.listId, req.body)
  res.status(200).json(boards)
})

var PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
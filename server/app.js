const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const lodash = require('lodash');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.json())

var users = {}

function addUser(user, password) {
  lodash.extend(users, {
    [user]: {
      password, 
      boards: {
        tutorialBoard: {
          name: "Tutorial Board (Start Here!)",
          lists: {},
          important: true
        }
      },
      isLoggedIn: false
    }
  })
}

function lookupUser(user, pass) {
  if (lodash.has(users, user) == true) {
    if (lodash.has(users.user, pass) == true) {
      return true
    }
  }
}

function randId() {
  return Math.random().toString(36).substr(2, 10);
}

function saveBoard(user, board) {
  lodash.extend(users.user.boards, {[randId()]: board})
}

function saveList(user, boardId, list) {
  lodash.extend(users.user.boards[boardId].lists, {[randId()]: list})
}

function saveCard(user, boardId, listId, card) {
  lodash.extend(users.user.boards[boardId].lists[listId].cards, {[randId()]: card})
}

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')); 
});

app.post('/:user/boards', (req, res) => {
  saveBoard(req.params.user, req.body)
  res.status(200).json(users[req.params.user])
})

app.get('/:user/boards', (req, res) => {
  res.json(users[req.params.user].boards)
})

app.get('/:user/boards/:boardId', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
})

app.get('/:user/boards/:boardId/lists', (req, res) => {
  res.json(users[req.params.user].boards[req.params.boardId].lists)
})

app.post('/:user/boards/:boardId/lists', (req, res) => {
  saveList(req.params.user, req.params.boardId, req.body)
  res.status(200).json(users[req.params.user].boards)
})

app.get('/boards/:boardId/lists/:listId/cards', (req, res) => {
  res.json(users[req.params.user].boards[req.params.boardId].lists[req.params.listId].cards)
})

app.post('/boards/:boardId/lists/:listId/cards', (req, res) => {
  saveCard(req.params.user, req.params.boardId, req.params.listId, req.body)
  res.status(200).json(users[req.params.user].boards)
})

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/signup', (req, res) => {
  addUser(req.body.username, req.body.password)
  res.status(200).json(users)
})

app.post('/login', (req, res) => {
  if (lookupUser(req.body.username, req.body.password) == true) {
    res.status(200).json(users[req.body.username].boards)
  } else {
    res.status(404).send("Not a valid username and/or password")
  }
})

var PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
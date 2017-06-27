const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const lodash = require('lodash');

const app = express();
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.json())

var users = {}

function randId() {
  return Math.random().toString(36).substr(2, 10);
}

function addUser(user, password) {
  lodash.extend(users, {
    [user]: {
      password: password,
      boards: {
        tutorialBoard: {
          name: "Tutorial Board (Start Here!)",
          lists: {},
          important: true
        }
      }
    },
    tokens: {}
  })
}

function verifyUser(username, password) {
  return (!lodash.isEmpty(users) && users.hasOwnProperty(username) && users[username].password === password)
}

function storeToken(username, token) {
  lodash.extend(users.tokens, {[token]: username})
}

function isAuthenticated(req, res) {
  return (!lodash.isEmpty(users.tokens) && users.tokens.hasOwnProperty(req.cookies.token))
}

function saveBoard(boards, board) {
  lodash.extend(boards, {[randId()]: board})
}

function saveList(boards, boardId, list) {
  lodash.extend(users.user.boards[boardId].lists, {[randId()]: list})
}

function saveCard(boards, boardId, listId, card) {
  lodash.extend(users.user.boards[boardId].lists[listId].cards, {[randId()]: card})
}

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')); 
});

app.get('/boards', (req, res) => {
  if (isAuthenticated(req, res)) {
    return res.status(200).json(users[users.tokens[req.cookies.token]].boards)
  } else {
    return res.status(401).send("Make an account or log in!")
  }
})

app.post('/boards', (req, res) => {
  if (isAuthenticated(req, res)) {
    saveBoard(users[users.tokens[req.cookies.token]].boards, req.body)
    res.status(200).json(users[users.tokens[req.cookies.token]].boards)
  } else {
    res.status(401).send("Make an account or log in!")
  }
})

app.get('/boards/:boardId', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
})

app.get('/boards/:boardId/lists', (req, res) => {
  res.json(users[req.params.user].boards[req.params.boardId].lists)
})

app.post('/boards/:boardId/lists', (req, res) => {
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

app.post('/signup', (req, res) => {
  addUser(req.body.username, req.body.password)
  res.status(200).send("Welcome to Bass's Trello!")
  console.log(users)
})

app.post('/login', (req, res) => {
  var token = randId()
  if (verifyUser(req.body.username, req.body.password)) {
    res.status(200).cookie("token", token).end()
    storeToken(req.body.username, token)
  } else {
    res.status(401).send("You need to log in!")
  }
})

var PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
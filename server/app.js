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

function addUser(username, password) {
  lodash.extend(users, {
    [username]: {
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

function authenticate(req, res, next) {
  if (!lodash.isEmpty(users.tokens) && users.tokens.hasOwnProperty(req.cookies.token)) {
    req.boards = users[users.tokens[req.cookies.token]].boards
    return next()
  } else {
    return res.status(401).send("Make an account or log in!")
  }
}

function saveBoard(boards, board) {
  lodash.extend(boards, {[randId()]: board})
}

function saveList(lists, list) {
  lodash.extend(lists, {[randId()]: list})
}

function saveCard(cards, card) {
  lodash.extend(cards, {[randId()]: card})
}

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')); 
});

app.get('/boards', authenticate, (req, res) => {
  return res.status(200).json(req.boards)
})

app.post('/boards', authenticate, (req, res) => {
  saveBoard(req.boards, req.body)
  return res.status(200).json(req.boards)
})

app.get('/boards/:boardId', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
})

app.post('/boards/:boardId/lists', authenticate, (req, res) => {
  saveList(req.boards[req.params.boardId].lists, req.body)
  return res.status(200).json(req.boards)
})

app.post('/boards/:boardId/lists/:listId/cards', authenticate, (req, res) => {
  saveCard(req.boards[req.params.boardId].lists[req.params.listId].cards, req.body)
  return res.status(200).json(req.boards)
})

app.post('/signup', (req, res) => {
  if (users.hasOwnProperty(req.body.username)) {
    res.status(401).send("That username already exists, please choose another!")
  } else {
    addUser(req.body.username, req.body.password)
    res.status(200).send("Welcome to Bass's Trello!")
  }
})

app.post('/login', (req, res) => {
  var token = randId()
  if (verifyUser(req.body.username, req.body.password)) {
    res.status(200).cookie("token", token).json(users[req.body.username].boards)
    storeToken(req.body.username, token)
  } else {
    res.status(409).send("You need to log in!")
  }
})

app.get('/logout', (req,res) => {
  res.status(200).cookie("token", "deleting", {expires: new Date(0)}).end()
})

var PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
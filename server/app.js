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

function verifyUser(user, pass) {
  if (users.hasOwnProperty(user)) {
    if (users[user].password === pass) {
      return true
    }
  } 
}

function storeToken(user, token) {
  lodash.extend(users.tokens, {[user]: token})
}

// function getUserData(token) {
//   if (users.hasOwnProperty(token)) {
//     users[lodash.findKey(users, token)].boards
//   }
// }

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

// app.get('/boards', (req, res) => {
//   console.log(users.hasOwnProperty(req.cookies))
//   console.log(req.cookies)
//   res.json(getUserData(req.cookies))
// })

app.post('/boards', (req, res) => {
  saveBoard(req.params.user, req.body)
  res.status(200).json(users[req.params.user])
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
  res.status(200).json(users)
})

app.post('/login', (req, res) => {
  var token = randId()
  console.log(req.cookies)
  console.log(users)

  if (verifyUser(req.body.username, req.body.password)) {
    res.status(200).cookie('testing', token)
    storeToken(req.body.username, token)
  } else {
    res.status(401).send("Not a valid username and/or password")
  }
})

var PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
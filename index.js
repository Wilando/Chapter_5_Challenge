const express = require('express');
const app = express();
const ejs = require('ejs'); 
const path = require('path');
const fs = require('fs');
const port = 3000;



let users = require('./db/users.json');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

function onRun(){
  console.log(`Server is running on http://localhost:${port}`);
}

function index(req, res){
  res.status(200);
  return res.render('index', {statusLogin: false});
}

function game(req, res){
  res.status(200);
  return res.render('permainan');
}

function login(req, res){
  res.status(200);
  return res.render('login', {statusLogin: false});
}

function signUp(req, res) {
  res.status(200);
  return res.render('signup', {cocokanPass: false});
}

function postSignUp(req, res) {
  if (req.body.password != req.body.passwordRepeat) {
    res.status(200);
    return res.render('signup', {cocokanPass: true});
  }
  else{
    users.push({
      email: req.body.email,
      password: req.body.password
    })
    
    const jsonString = JSON.stringify(users);
    fs.writeFile('./db/users.json', jsonString, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          res.status(201);
          res.render('index', {statusLogin: true, nama: req.body.email});
      }
    });
  }


}

function postLogin(req, res,){
  let userAunt = null;
  for (var i = 0; i < users.length; i++) {
  	if (users[i].email == req.body.email && users[i].password == req.body.password) {
      userAunt = true;
      break;
  	} else{
  		userAunt = false;
  	}

  }
  if (userAunt) {
    res.status(200);
    res.render('index', {statusLogin: true, nama: req.body.email});
  } else{
    res.status(200);
    res.render('login', {statusLogin: true});  
  }

}
app.get('/', index);
app.get('/game', game);
app.get('/login', login);
app.post('/login', postLogin);
app.get('/signup', signUp);
app.post('/signup', postSignUp);

// ================================= Serving Data json ========================================================

function postSignUpJson(req, res) {
  if (req.body.password != req.body.passwordRepeat) {
    res.status(200).json({massage: "password yang dimasukan tidak sama"});
  }
  else{
    users.push({
      email: req.body.email,
      password: req.body.password
    })
    
    const jsonString = JSON.stringify(users);
    fs.writeFile('./db/users.json', jsonString, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          res.status(201).json({massage: "berhasil menambahkan user"});
      }
    });
  }


}

function postLoginJson(req, res,){
  let userAunt = null;
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == req.body.email && users[i].password == req.body.password) {
      userAunt = true;
      break;
    } else{
      userAunt = false;
    }

  }
  if (userAunt) {
    res.status(200).json({massage: "Login sukses"});
  } else{
    res.status(200).json({massage: "Login gagal, email atau username salah / belum terdaftar"});  
  }

}

function deleteUser(req, res) {
  users = users.filter((item) => {
    return item.email != req.params.email;
  });

  const jsonString = JSON.stringify(users);
  fs.writeFile('./db/users.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        res.status(200).json({massage: "berhasil menghapus user"});
    }
  });
}

function updateDataUser(req, res) { 
  
  let index = users.findIndex(function(post, index) {
  if(post.email == req.params.email)
    return true;
  });

  users[index].email = req.body.email;
  users[index].password = req.body.password;

  const jsonString = JSON.stringify(users);
  fs.writeFile('./db/users.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        res.status(200).json({massage: "berhasil mengupdate data user"});
    }
  });
}

app.post('/login_json', postLoginJson);
app.post('/signup_json', postSignUpJson);
app.delete('/hapusUser_json/:email', deleteUser);
app.put('/updateUser_json/:email', updateDataUser);




app.listen(port, onRun);

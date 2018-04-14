const data = require('../data/users.js');

let inter = {
  login: (req,res)=>{
    data.login(req.headers.username, req.headers.password)
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      console.log(err);
      res.status(300).send(err);
    })
  },
  inviteUsers: (req,res)=>{
    
  },
  getStats: (req,res)=>{

  },
  createUser: (req,res)=>{
    console.log('username/pw', req.headers.username, req.headers.password)
    data.createUser(req.headers.username, req.headers.password)
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      console.log(err);
      res.status(300).send(err);
    })
  }
};

module.exports = inter;

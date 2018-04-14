const data = require('../data/games.js');

/*
app.get('/createGame', placeholder)
app.get('/joinGame', placeholder)
app.get('/findGames', placeholder)
app.get('/getActiveUsers', placeholder)
app.get('/playAgain', placeholder)
*/
let exportMe ={
  createGame: (req,res)=>{
    data.createGame(req.body.gameName, req.body.pID, req.body.pLat, req.body.pLong)
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      res.status(300).send(err);
    })
  },
  joinGame: (req,res)=>{
    data.joinGame(req.body.gameID, req.body.pID, req.body.pLat, req.body.pLong)//gameID, pID,pLat, pLong
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      res.status(300).send(err);
    })
  },
  findGame: (req, res)=>{
    console.log('findgame called.')
    data.getGames()
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      res.status(300).send(err);
    })
  },
  getActiveUsers: (req, res)=>{
    data.getActiveUsers(req.body.gameID)
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      res.status(300).send(err);
    })
  },
  playAgain: (req, res)=>{
    data.playAgain(req.body.gameID)
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      res.status(300).send(err);
    })
  },
  updateLocation: (req, res)=>{
    data.updateLocation(req.body.gameID, req.body.uid, req.body.pLat, req.body.pLong)
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      res.status(300).send(err);
    })
  }
};

module.exports = exportMe;

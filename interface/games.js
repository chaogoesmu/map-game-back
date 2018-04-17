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
    console.log(req.body)
    data.createGame(req.body.pID, req.body.gameName, req.body.pLat, req.body.pLong)
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      console.log(err)
      res.status(405).send(err);
    })
  },
  joinGame: (req,res)=>{
    data.joinGame(req.body.gameID, req.body.pID, req.body.pLat, req.body.pLong)//gameID, pID,pLat, pLong
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      console.log(err)
      res.status(405).send(err);
    })
  },
  findGame: (req, res)=>{
    data.getGames()
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      res.status(405).send(err);
    })
  },
  getActiveUsers: (req, res)=>{
    data.getActiveUsers(req.body.gameID)
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      res.status(405).send(err);
    })
  },
  playAgain: (req, res)=>{
    data.playAgain(req.body.gameID)
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      res.status(405).send(err);
    })
  },
  updateLocation: (req, res)=>{
    data.updateLocation(req.body.gameID, req.body.uid, req.body.pLat, req.body.pLong)
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      res.status(405).send(err);
    })
  },
  quit: (req, res)=>{
    data.quit(req.body.uid)
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      console.log('error on quitting', req.body.uid)
      console.log(err)
      data.quitController(req.body.uid)
      .then(results=>{
        return res.status(200).send(results);
      })
      .catch(err=>{
        console.log(err)
        res.status(405).send(err);
      })
    })
  },
  deleteGame:(req, res)=>{
    data.quitController(req.body.pID)
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      res.status(405).send(err);
    })
  },
  capture: (req,res)=>{
    let plat = req.body.pLat;
    let plong = req.body.pLong;
    let capDistance = req.body.distance || .0002;
    data.getActiveUsers(req.body.gID)
    .then(results=>{
      results.forEach(x=>{
        if(Math.abs(x.lat-plat) + Math.abs(x.long-plong)<capDistance)
        {
          console.log(x.pid);
          data.captured(x.pid, req.body.pID);
        }
      })
      return res.status(200).send(results);
    })
    .catch(err=>{
      console.log(err);
      res.status(405).send(err);
    })

  },
  updateItLocation: (req, res) => {
    data.updateItLocation(req.body.gID, req.body.pID, req.body.pLat, req.body.pLong)
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      res.status(405).send(err);
    })
  },
  getItLocation:(req, res)=>{
    data.getGame(req.body.gID)
    .then(results=>{
      return res.status(200).send(results);
    })
    .catch(err=>{
      res.status(405).send(err);
    })
  }
};

module.exports = exportMe;

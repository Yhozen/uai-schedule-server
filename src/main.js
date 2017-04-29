import getData from './getData'
import express from 'express'

const app = express()

const port = (process.env.PORT || 8000)

app.set('json spaces', 2)

let data = getData()
setInterval(() => data = getData(), 11000)


app.listen(port, () => {
  console.log('We are live on ' + port);
})
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });
app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  if (req.query.adelanto || req.query.finalizado) {
    res.json(getData(req.query.adelanto, req.query.finalizado))
  } else {
    res.json(data)
  }
})

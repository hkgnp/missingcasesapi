const express = require('express');
const mongoUrl = process.env.MONGO_URL;
const MongoUtil = require('./MongoUtil');

// Add in the missing requires for the API to work
const cors = require('cors');

// create an instance of express app
let app = express();

// Add in the missing express.use() for the API to work
app.use(express.json());
app.use(cors());

async function main() {
  const DBNAME = 'missing_persons';
  let db = await MongoUtil.connect(mongoUrl, DBNAME);

  app.get('/reports', async (req, res) => {
    let result = await db.collection('reports').find({}).toArray();
    res.send(result);
  });

  app.post('/report', async (req, res) => {
    let name = req.body.name;
    let date = req.body.date;
    let location = req.body.location;
    let details = req.body.details;

    let result = await db.collection('reports').insertOne({
      name: name,
      date: date,
      location: location,
      details: details,
    });
    res.send(result);
  });

  app.delete('/report/:postid', async (req, res) => {
    let id = req.params.postid;
    let result = await db.collection('reports').deleteOne({
      _id: ObjectId(id),
    });

    res.send(result);
  });
}

main();

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'));

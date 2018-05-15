const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({
    status: "success",
    data: "hello world!"
  });
});


app.get('/goals', (req, res) => {
  res.send({
    status: "success",
    data: [
      {
        "id": 12,
        "short": "",
        "title": "",
        "updated": "",
      },
    ]
  });
});


app.post('/goals', (req, res) => {
  res.send({
    status: "success",
    data: {
      "id": 12,
      "short": "BACK",
      "title": "Back Workout!",
      "updated": "2018-04-09",
    }
  });
});


app.get('/goals/:goal_id', (req, res) => {
  let goalId = Number(req.param('goal_id'));
  res.send({
    status: "success",
    data: [],
    req_params: {
      goal_id: goalId
    },
  });
});


app.post('/goals/:goal_id/activity', (req, res) => {
  let goalId = Number(req.param('goal_id'));
  res.send({
    status: "success",
    data: [],
    req_params: {
      goal_id: goalId
    },
  });
});

app.listen(3000, () => console.log('golie-api listening on port 3000!'));

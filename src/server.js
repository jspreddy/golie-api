const express = require('express');
const app = express();

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
  let params = req.params;
  res.send({
    status: "success",
    data: [],
    req_params: {
      goal_id: Number(params.goal_id)
    },
  });
});


app.post('/goals/:goal_id/activity', (req, res) => {
  let params = req.params;
  res.send({
    status: "success",
    data: [],
    req_params: {
      goal_id: Number(params.goal_id)
    },
  });
});

app.listen(3000, () => console.log('golie-api listening on port 3000!'));

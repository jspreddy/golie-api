const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({
    status: "success",
    data: "hello world!"
  })
});

app.listen(3000, () => console.log('golie-api listening on port 3000!'));

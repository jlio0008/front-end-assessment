const axios = require("axios");
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Starting server at: ${port}`);
});

app.get("/usersData", function (req, res) {
    const url = 'https://gorest.co.in/public/v2/users?access-token=b1025a737ad8ca4f8af408f55631494367433c79a94d76a32699e8f5b7656acd';
    // Make a request
      axios.get(url)
        .then(response => {
          // send the collected data back to the client-side DataTable
          res.json({
            "data": response.data
          })
        })
        .catch(function (error) {
           // handle error
           res.json({"error": error});
        })
    });

app.get("/postsData", function (req, res) {
  const url = 'https://gorest.co.in/public/v2/posts?access-token=b1025a737ad8ca4f8af408f55631494367433c79a94d76a32699e8f5b7656acd';
  // Make a request
    axios.get(url)
      .then(response => {
        // send the collected data back to the client-side DataTable
        res.json({
          "data": response.data
        })
      })
      .catch(function (error) {
          // handle error
          res.json({"error": error});
      })
  });

app.get("/commentsData", function (req, res) {
  const url = 'https://gorest.co.in/public/v2/comments?access-token=b1025a737ad8ca4f8af408f55631494367433c79a94d76a32699e8f5b7656acd';
  // Make a request
    axios.get(url)
      .then(response => {
        // send the collected data back to the client-side DataTable
        res.json({
          "data": response.data
        })
      })
      .catch(function (error) {
          // handle error
          res.json({"error": error});
      })
  });

app.get("/to-dosData", function (req, res) {
  const url = 'https://gorest.co.in/public/v2/todos?access-token=b1025a737ad8ca4f8af408f55631494367433c79a94d76a32699e8f5b7656acd';
  // Make a request
    axios.get(url)
      .then(response => {
        // send the collected data back to the client-side DataTable
        res.json({
          "data": response.data
        })
      })
      .catch(function (error) {
          // handle error
          res.json({"error": error});
      })
  });
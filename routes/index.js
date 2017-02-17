var express = require('express');
var http = require('http');

var router = express.Router();

/** exploring different GET requests **/
router.get('/', function(req, res, next) {
  console.log('GET request');
  res.send('GET Request');
});

router.get('/:id', function(req, res, next) {
  console.log('GET request with data: ' + req.params.id);
  res.send('GET Request with data:<br />' + req.params.id);
});

router.get('/:id/:name', function(req, res, next) {
  console.log('GET request with two pieces of data: ' + req.params.id + ', ' + req.params.name);
  res.send('GET Request with two pieces of data:<br />' + req.params.id + ', ' + req.params.name);
});

router.get('/json/:id/:name', function(req, res, next) {
    var data = {id: 1234, name: 'Generic Name goes here'};
    console.log('GET request with JSON data: ' + JSON.stringify(data));
    res.send('GET Request with JSON data:<br />' + JSON.stringify(data));
});

/** exploring different POST requests **/
router.post('/', function(req, res, next) {
  console.log('POST request');
  res.send('POST Request');
});

/** exploring different PUT requests **/
router.put('/', function(req, res, next) {
  console.log('PUT request');
  res.send('PUT Request');
});

/** exploring different DELETE requests **/
router.delete('/', function(req, res, next) {
  console.log('DELETE request');
  res.send('DELETE Request');
});

module.exports = router;

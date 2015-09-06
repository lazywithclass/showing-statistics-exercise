var express = require('express'),
    app = express(),
    util = require('util'),
    spawn = require('child_process').spawn;

app.use(express.static('public'));

app.get('/api/1/stats/from/:from/to/:to', function (req, res) {
  var from = req.params.from,
      to = req.params.to,
      sed = spawn('sed', ['-n', util.format('%s,%sp', from, to), 'input.csv']);
  sed.stdout.pipe(res);
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('server listening on port', port);
});

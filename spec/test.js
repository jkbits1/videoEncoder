/**
 * Created by Jon on 04/04/16.
 */

var test = require('tape');
var names = require('../names');

test('names generated correctly', function (t) {

  t.plan(3);

  var fileNameBody = "stub";

  var fileNumMin = 4;
  var fileNumMax = 5;

  var results = names.generateNames
    (fileNameBody, fileNumMin, fileNumMax);

  t.equal(results.length, 2);
  t.equal(results[0], 'stub4');
  t.equal(results[1], 'stub5');
});

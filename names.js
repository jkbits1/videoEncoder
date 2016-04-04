/**
 * Created by Jon on 04/04/16.
 */

module.exports = {
  generateNames: generateNames
};

function generateNames (stub, min, max) {
  var len = (max - min) + 1;

  var fileNumRange = Array.apply(0, Array(len))
    .map((val, idx) => {
      return idx + min;
    });

  var fileNames = fileNumRange.map(val => {
    return stub + val;
  });

  return fileNames;
}

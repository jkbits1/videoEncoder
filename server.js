/**
 * Created by Jon on 25/03/16.
 */

"use strict";

const ffmpeg = require("fluent-ffmpeg");

var fileNameBody = "planet";

var fileNumMin = 1;
var fileNumMax = 4;

var len = (fileNumMax - fileNumMin) + 1;

console.log(len);

var fileNumRange = Array.apply(0, Array(len))
  .map((val, idx) => {
    return idx + fileNumMin;
  });

var fileNames = fileNumRange.map(val => {
  return fileNameBody + val;
});

console.log(fileNames);

fileNames.forEach(fileName => {
  var proc = ffmpeg('./' + fileName + '.mpg')
  .videoCodec('libx264')
  .audioCodec('copy')
  // .outputOptions('')
  // .outputOptions(['-preset medium', '-crf 18'])
  .outputOptions([ '-preset medium', '-crf 18', '-ss 90', '-t 10' ])
  .save('./' + fileName + 'test.m4v');
});


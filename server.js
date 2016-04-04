/**
 * Created by Jon on 25/03/16.
 */

"use strict";

const ffmpeg = require("fluent-ffmpeg");
const names = require('./names');

var fileNameBody = "planet";

var fileNumMin = 1;
var fileNumMax = 3;

var fileNames =
  names.generateNames(fileNameBody, fileNumMin, fileNumMax);

console.log(fileNames);

fileNames.forEach(fileName => {
  var proc = ffmpeg('./' + fileName + '.mpg')
  .videoCodec('libx264')
  .audioCodec('copy')
  // .outputOptions('')
  // .outputOptions(['-preset medium', '-crf 18'])
  .outputOptions([ '-preset medium', '-crf 18', '-ss 90', '-t 10' ])
  .save('./' + fileName + '.m4v');
});


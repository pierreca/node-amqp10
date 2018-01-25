'use strict';
var Builder = require('buffer-builder'),
    Promise = require('bluebird');

function SaslAnonymous () {}

SaslAnonymous.prototype.getInitFrameContent = function() {
  return new Promise(function(resolve) {
    var buf = new Builder();
    buf.appendUInt8(0); // <null>
    resolve({
      mechanism: 'ANONYMOUS',
      initialResponse: buf.get()
    });
  });
};

SaslAnonymous.prototype.getChallengeResponseContent = function () {
  return new Promise(function(resolve) {
    resolve();
  });
};

module.exports = SaslAnonymous;
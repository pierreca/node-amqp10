'use strict';
var Builder = require('buffer-builder'),
    Promise = require('bluebird');

function SaslAnonymous () {}

SaslAnonymous.prototype.getInitFrameContent = function() {
  var buf = new Builder();
  buf.appendUInt8(0); // <null>
  return Promise.resolve({
    mechanism: 'ANONYMOUS',
    initialResponse: buf.get()
  });
};

SaslAnonymous.prototype.getChallengeResponseContent = function () {
  return Promise.resolve();
};

module.exports = SaslAnonymous;
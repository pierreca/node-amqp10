'use strict';
var Builder = require('buffer-builder'),
    Promise = require('bluebird');

function SaslPlain () {
}

SaslPlain.prototype.getInitFrameContent = function (credentials) {
  var buf = new Builder();
  buf.appendUInt8(0); // <null>
  buf.appendString(credentials.user);
  buf.appendUInt8(0); // <null>
  buf.appendString(credentials.pass);
  return Promise.resolve({
    mechanism: 'PLAIN',
    initialResponse: buf.get()
  });
};

SaslPlain.prototype.getChallengeResponseContent = function () {
  return Promise.resolve();
};

module.exports = SaslPlain;
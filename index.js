
/**
 * Simple proxy server for IOTA.
 * Relays commands to the IOTA Tangle, but intercepts attachToTangle commands and performs PoW locally.
 *
 * This proxy server useful for when you want to perform transfers with iota.lib.js in Node but do not
 * have access to a full node that grants you access to the necessary attachToTangle commands.
 */

var iotaProxy = require('./lib/iotaproxy.js');

iotaProxy.start(
  {
    host: 'http://node0.puyuma.org',
    port: 14265,
    localPort: 14266,
    overrideAttachToTangle: true,
    timeout: 15
  }
);

var httpProxy = require('http-proxy'),
    http = require('http'),
    addresses;

    // routing hash
addresses = {
  'default': {
    host: 'localhost',
    port: 5000
  }
};

console.log('===========================\nRouting table:\n---');
Object.keys(addresses).forEach(function(from) {
  console.log(from + ' ==> ' + addresses[from].host + ':' + addresses[from].port);
});

httpProxy.createServer(function (req, res, proxy) {
  var target;

      // if the host is defined in the routing hash proxy to it
      // else proxy to default host
  target = (addresses[req.headers.host]) ? addresses[req.headers.host] : addresses.default;

  proxy.proxyRequest(req, res, target);
}).listen(80);

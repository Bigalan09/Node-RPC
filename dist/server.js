'use strict';

var _grpc = require('grpc');

var _grpc2 = _interopRequireDefault(_grpc);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PROTO_PATH = _path2.default.join(__dirname, '/../protos/helloworld.proto');

var hello_proto = _grpc2.default.load(PROTO_PATH).helloworld;

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
    callback(null, {
        message: 'Hello ' + call.request.name
    });
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
    var server = new _grpc2.default.Server();
    server.addService(hello_proto.Greeter.service, {
        sayHello: sayHello
    });
    server.bind('0.0.0.0:50051', _grpc2.default.ServerCredentials.createInsecure());
    server.start();
}

main();
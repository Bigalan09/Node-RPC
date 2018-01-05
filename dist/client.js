'use strict';

var _grpc = require('grpc');

var _grpc2 = _interopRequireDefault(_grpc);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PROTO_PATH = _path2.default.join(__dirname, '/../protos/helloworld.proto');

var hello_proto = _grpc2.default.load(PROTO_PATH).helloworld;

function main() {
    var client = new hello_proto.Greeter('localhost:50051', _grpc2.default.credentials.createInsecure());
    var user = void 0;
    if (process.argv.length >= 3) {
        user = process.argv[2];
    } else {
        user = 'world';
    }
    client.sayHello({
        name: user
    }, function (err, response) {
        console.log('Greeting:', response.message);
    });
}
main();
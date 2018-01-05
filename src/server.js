import grpc from 'grpc';

const PROTO_PATH = __dirname + '/protos/helloworld.proto';

let hello_proto = grpc
    .load(PROTO_PATH)
    .helloworld;


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
    let server = new grpc.Server();
    server.addService(hello_proto.Greeter.service, {
        sayHello: sayHello
    });
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
}

main();
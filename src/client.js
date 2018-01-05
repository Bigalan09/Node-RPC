import grpc from 'grpc';

const PROTO_PATH = __dirname + '/protos/helloworld.proto';

let hello_proto = grpc
    .load(PROTO_PATH)
    .helloworld;

function main() {
    let client = new hello_proto.Greeter('localhost:50051', grpc.credentials.createInsecure());
    let user;
    if (process.argv.length >= 3) {
        user = process.argv[2];
    } else {
        user = 'world';
    }
    client
        .sayHello({
            name: user
        }, function (err, response) {
            console.log('Greeting:', response.message);
        });
}

main();
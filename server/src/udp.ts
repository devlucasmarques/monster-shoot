import dgram from 'dgram';

const server = dgram.createSocket('udp4');

server.on('error', () => {
  console.log('error');
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

export default server;

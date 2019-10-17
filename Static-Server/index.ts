import * as http from 'http'
import {IncomingMessage, ServerResponse} from 'http';

const server = http.createServer();

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
  console.log('有人请求了')
  console.log(IncomingMessage)
  console.log(ServerResponse);
  console.log(request.method);
  console.log(request.url);
  console.log(request.headers);
  let array = []
  request.on('data', chunk =>{
    array.push(chunk)
  })
  request.on('end', () => {
    const body = Buffer.concat(array).toString()
    console.log(body);
    response.end('hi' + '\n')
  })
})

server.listen(8888, () => {
  console.log(server.address())
})
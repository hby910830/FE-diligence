import * as http from 'http'
import {IncomingMessage, ServerResponse} from 'http';
import * as fs from 'fs'
import * as path from 'path'

const server = http.createServer();
const publicDir = path.resolve(__dirname, 'public') //会得到当前目录所在的绝对路径

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
  // console.log('有人请求了')
  // console.log(IncomingMessage)
  // console.log(ServerResponse);
  // console.log(request.method);
  // console.log(request.url);
  // console.log(request.headers);
  // let array = []
  // request.on('data', chunk => {
  //   array.push(chunk)
  // })
  // request.on('end', () => {
  //   const body = Buffer.concat(array).toString()
  //   console.log(body);
  //   response.statusCode = 404
  //   response.setHeader('Content-Type', 'image/png')
  //   response.setHeader('X-HBY', 'I am HanBaoYi')
  //   response.write(1 + '\n')
  //   response.end()
  // })

  const {url, method, headers} = request
  switch (url) {
    case '/index.html':
      fs.readFile(path.resolve(publicDir, 'index.html'), (error, data) => {
        if (error) throw error
        response.setHeader('Content-type', 'text/html;charset=utf-8')
        response.end(data.toString())
      })
      break
    case '/main.js':
      fs.readFile(path.resolve(publicDir, 'main.js'), (error, data) => {
        if (error) throw error
        response.setHeader('Content-type', 'application/javascript;charset=utf-8')
        response.end(data.toString())
      })
      break
    case '/style.css':
      fs.readFile(path.resolve(publicDir, 'style.css'), (error, data) => {
        if (error) throw error
        response.setHeader('Content-type', 'text/css;charset=utf-8')
        response.end(data.toString())
      })
      break
  }
})

server.listen(8888, () => {
  console.log(server.address())
})
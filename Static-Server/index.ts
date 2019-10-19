import * as http from 'http'
import {IncomingMessage, ServerResponse} from 'http';
import * as fs from 'fs'
import * as path from 'path'
import * as url from 'url'

const server = http.createServer();
const publicDir = path.resolve(__dirname, 'public') //会得到当前目录所在的绝对路径
let cache = 3600 * 24 * 365
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

  const {url: src, method, headers} = request  //url:src把url重命名为src
  const {pathname, search} = url.parse(src)

  // switch (pathname) {
  //   case '/index.html':
  //     fs.readFile(path.resolve(publicDir, 'index.html'), (error, data) => {
  //       if (error) throw error
  //       response.setHeader('Content-type', 'text/html;charset=utf-8')
  //       response.end(data.toString())
  //     })
  //     break
  //   case '/main.js':
  //     fs.readFile(path.resolve(publicDir, 'main.js'), (error, data) => {
  //       if (error) throw error
  //       response.setHeader('Content-type', 'application/javascript;charset=utf-8')
  //       response.end(data.toString())
  //     })
  //     break
  //   case '/style.css':
  if(method !== 'GET'){
    response.statusCode = 405
    response.end(0)
    return
  }
  let filename = pathname.substr(1)
  if(!filename){
    filename = 'index.html'
  }
  fs.readFile(path.resolve(publicDir, filename), (error, data) => {
    if (error) {
      console.log(error);
      if (error.errno === -2) {
        response.statusCode = 404
        fs.readFile(path.resolve(publicDir, '404.html'), (error, data) => {
          response.end(data)
        })
      }else{
        response.statusCode = 500
        response.end('servers business,please try it later!!!')
      }
    } else {
      response.setHeader('Cache-Control', `public, max-age=${cache}`)
      response.end(data)
    }
  })
  // break
  //   default:
  //     response.statusCode = 404
  //     response.end()
  // }
})

server.listen(8888, () => {
  console.log(server.address())
})
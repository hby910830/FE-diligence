import * as https from 'https'
import * as querystring from 'querystring'
import {appid, secret} from './private'
import md5 = require("md5");

export const translate = wold => {
  const salt = Math.random()
  const sign = md5(appid + wold + salt + secret)

  const query: string = querystring.stringify({
    q: wold,
    from: 'en',
    to: 'zh',
    salt,
    appid,
    sign
  })
  
  const options = {
    hostname: 'api.fanyi.baidu.com',
    port: 443,
    path: '/api/trans/vip/translate?' + query,
    method: 'GET'
  }

  const req = https.request(options, (res) => {
    let data = []
    res.on('data', (chunk) => {
      const str = Buffer.concat(chunk)
    });
    res.on('end', res =>{
      res.push(data)
    })
  });

  req.on('error', (e) => {
    console.error(e);
  });
  req.end();

}
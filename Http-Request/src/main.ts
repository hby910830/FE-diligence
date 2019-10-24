import * as https from 'https'
import * as querystring from 'querystring'
import {user} from './private'
import md5 = require("md5");

export const translate = wold => {
  const salt = Math.random()
  const appid = user.appid
  const secret = user.secret
  const sign = md5(appid + wold + salt + secret)
  console.log(sign);
  return
  const query: string = querystring.stringify({
    q: wold,
    from: 'en',
    to: 'zh',
    salt,
    appid,
    sign
  })
  console.log(query);
  return
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
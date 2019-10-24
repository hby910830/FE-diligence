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
    let chunks = []
    res.on('data', chunk => {
      chunks.push(chunk)
    });
    res.on('end', () => {
      const string = Buffer.concat(chunks).toString()
      type BaiduResult = {
        from: string;
        to: string;
        trans_result: [{
          src: string;
          dst: string;
        }],
        error_code?: string;
        error_msg?: string;
      }
      const object:BaiduResult = JSON.parse(string)

      console.log(object.trans_result[0].dst);
    })
  });

  req.on('error', (e) => {
    console.error(e);
  });
  req.end();

}
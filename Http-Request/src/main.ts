import * as https from 'https'
import * as querystring from 'querystring'
import {user} from '../private'
import md5 = require("md5");

export const translate = wold => {
  const random = Math.random()
  const sign = md5(`${user.appid}`)
  const string: string = querystring.stringify({
    q: wold,
    from: 'en',
    to: 'zh',
    salt: Math.random(),
    appid: user.appid,
    sign: ''
  })
  console.log(string);
  return
  const options = {
    hostname: 'api.fanyi.baidu.com',
    port: 443,
    path: '/api/trans/vip/translate?q=apple&from=en&to=zh&appid=20191024000344145&salt=1435660288&sign=f561c3e5da47210ca61d398b508a9a79',
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
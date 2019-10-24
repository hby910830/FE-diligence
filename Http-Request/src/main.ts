import * as https from 'https'
import * as querystring from 'querystring'
import {appid, secret} from './private'
import md5 = require("md5");

export const translate = (wold: string) => {
  const salt = Math.random()
  const sign = md5(appid + wold + salt + secret)
  let to, from
  if (/[a-zA-Z]/.test(wold[0])) {
    to = 'zh'
    from = 'en'
  } else {
    to = 'en'
    from = 'zh'
  }
  const query: string = querystring.stringify({
    q: wold,
    from,
    to,
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
    let chunks: Array<Buffer> = []
    res.on('data', (chunk: Buffer) => {
      console.log(chunk.constructor); //Buffer
      chunks.push(chunk)
    });
    res.on('end', () => {
      const string = Buffer.concat(chunks).toString()
      type BaiduResult = {
        from: string;
        to: string;
        trans_result: { src: string; dst: string; }[],
        error_code?: string;
        error_msg?: string;
      }
      const object: BaiduResult = JSON.parse(string)
      type ErrorMap = {
        [key: string]: string
      }
      if (object.error_code) {
        let table: ErrorMap = {
          52001: '请求超时',
          52002: '系统错误',
          52003: '未授权用户',
          54000: '必填参数为空',
          54001: '签名错误',
          54003: '访问频率受限',
          54004: '账户余额不足',
          54005: '长query请求频繁',
          58000: '客户端IP非法',
          58001: '译文语言方向不支持',
          58002: '服务当前已关闭',
          90107: '认证未通过或未生效',
        }
        console.log(table[object.error_code])
        process.exit(1)
      } else {
        console.log(object.trans_result[0].dst);
        process.exit(0)
      }
    })
  });

  req.on('error', (e) => {
    console.error(e);
  });
  req.end();

}
let mysql = require('mysql');
let connection = mysql.createConnection({
	host: 'localhost',  //如果macOs, Linux可以直接写localhost, windows必须写成ip，使用docker-machine ip获取
	user: 'root',
	password: '123456'
});
connection.connect();

//创建数据库
connection.query('CREATE DATABASE IF NOT EXISTS han DEFAULT CHARSET utf8mb4 COLLATE ' +
	'utf8mb4_unicode_520_ci;', function (error, results, fields) {
	if (error) throw error;
	console.log('创建数据库')
	console.log(results);
});
connection.query('use han')
//创建表
connection.query(`CREATE TABLE IF NOT EXISTS user(
	name text,
	age int
)`, function (error, results, fields) {
	if (error) throw error;
	console.log('创建表')
	console.log(results);
});
connection.end();   
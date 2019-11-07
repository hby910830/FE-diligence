let mysql = require('mysql');
let connection = mysql.createConnection({
	host: 'localhost',  //如果macOs, Linux可以直接写localhost, windows必须写成ip，使用docker-machine ip获取
	user: 'root',
	password: '123456'
});
connection.connect();
//CREATE TABLE IF NOT EXISTS user CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
connection.query('CREATE DATABASE IF NOT EXISTS han DEFAULT CHARSET utf8mb4 COLLATE ' +
	'utf8mb4_unicode_520_ci;', function (error, results, fields) {
	if (error) throw error;
	console.log(results[0]);
});
connection.end();   
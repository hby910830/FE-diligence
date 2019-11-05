let mysql = require('mysql');
let connection = mysql.createConnection({
	host: 'localhost',  //如果macOs, Linux可以直接写localhost, windows必须写成ip，使用docker-machine ip获取
	user: 'me',
	password: 'secret',
	database: 'my_db'
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	if (error) throw error;
	console.log('The solution is: ', results[0].solution);
});
connection.end();   
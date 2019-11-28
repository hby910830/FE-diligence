const {Duplex} = require('stream')

const inoutStream = new Duplex({
	write(chunk, encoding, callback){
		console.log(chunk.toString())
		callback()
	},
	read(size){
		let char = String.fromCharCode(this.currentCharCode++)
		this.push(char)
		console.log(`退了${char}`)  //这是一个一个的推,等别人调用read方法再推
		if(this.currentCharCode > 90){ //Z
			this.push(null)
		}
	}
})

inoutStream.currentCharCode = 65 //A
process.stdin.pipe(inoutStream).pipe(process.stdout)
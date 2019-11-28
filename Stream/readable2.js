const {Readable} = require('stream')

const inStream = new Readable({
	read(size){
		let char = String.fromCharCode(this.currentCharCode++)
		this.push(char)
		console.log(`退了${char}`)  //这是一个一个的推
		if(this.currentCharCode > 90){ //Z
			this.push(null)
		}
	}
})

inStream.currentCharCode = 65 //A

inStream.pipe(process.stdout)

const addTwo = a => b =>  a + b
const addThree = a => b => c =>  a + b + c
const addFour = a => b => c => d =>  a + b + c + d

const currify = fn => {
	if(fn === addTwo){
		return addTwo
	}else if(fn === addThree) {
		return addThree
	}else if(fn === addFour){
		return addFour
	}
}

currify(addTwo)(1)(2)
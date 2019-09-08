class Promise2{
  constructor(fn){
    if(typeof fn !== 'function') {
      throw new Error('Promise必须接受一个函数')
    }
  }
  then(){
  }
}

export default Promise2
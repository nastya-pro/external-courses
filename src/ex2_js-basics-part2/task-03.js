function parityOfArrayNumbers(array){
   let even = 0;
    let odd = 0;
    let zero = 0;

    let notNullArray=array.filter(item=>item!==null)
    for (let i = 0; i < notNullArray.length; i++){
        if(notNullArray[i]===0){
            zero++
        } else if(notNullArray[i] % 2 === 0){
            even++
        } else {
            odd++
        }
    }

    return [even, odd, zero]
}

module.exports = parityOfArrayNumbers
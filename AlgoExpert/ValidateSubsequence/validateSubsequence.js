function isValidSubsequence(array, sequence) {
    let seqPosition = 0;
    let lastPosition = 0;
    let result = false;
    
    array.forEach(item => {
      let index = sequence.findIndex(i => i === item);
      if(index !== -1){
        if(index >= lastPosition){
          seqPosition++;
          lastPosition = index;
        }
      }
  
      if(seqPosition === sequence.length)
        result = true;
    });
    
    return result;
}
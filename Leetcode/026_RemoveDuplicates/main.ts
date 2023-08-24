function removeDuplicates(nums: number[]): number {
    let count = 0;
    let sortCount = 0;
    let k;

    for(let i=0; i < nums.length; i++){
        for(let j=i+1; j <= nums.length-1; j++){
            if(nums[i] === nums[j]){
                nums[j] = -101;
                count++;
            }
        }
    }

    for(let i=0; i < nums.length; i++){
        if(nums[i] !== -101)
            nums[sortCount++] = nums[i];
    }
    
    for(let i=sortCount; i < nums.length; i++){
        nums[i] = -101;
    }
    
    console.log(nums);
    
    return sortCount;
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
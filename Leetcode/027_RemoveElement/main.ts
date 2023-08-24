// In-Place method
function removeElement(nums: number[], val: number): number {
    let count = 0;
    for(let i=0; i < nums.length; i++){
        if(nums[i] === val){
            count++;
            nums[i] = -1;
        }
    }
    nums.sort((n1, n2) => n2 - n1);

    console.log(nums);
    console.log(nums.length-count);

    return (nums.length-count);
};

function removeElementNotInPlace(nums: number[], val: number): number {
    const filteredValArr: number[]= nums.map((num, i) => {
        if(num === val){
            nums[i] = -1;
        }
        return nums[i];
    });
    filteredValArr.sort((n1, n2) => n2 - n1);

    const k = nums.length-filteredValArr.length;

    console.log(filteredValArr);
    console.log(k);

    return k;
};

removeElement([3,2,2,3], 3);
removeElementNotInPlace([3,2,2,3], 3);
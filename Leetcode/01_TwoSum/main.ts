// First solution
function twoSum(nums: number[], target: number): number[] | undefined {

    for(let i=0; i < nums.length; i++){
        for(let j=1; j <= nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
}

// Solution O(n) time complexity
function twoSum_02(nums: number[], target: number): number[] | undefined {
    let map: { [key: number]: number }  = {};

    for(let i=0; i < nums.length; i++){
        let diff = target - nums[i];
        if(diff in map){
            return [map[diff], i]
        }

        map[nums[i]] = i;
    }
}
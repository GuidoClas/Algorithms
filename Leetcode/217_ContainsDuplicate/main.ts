function containsDuplicate(nums: number[]): boolean {
    return (new Set(nums)).size !== nums.length;
};

containsDuplicate([1,2,3,1]);
// Solution if not mutating nums1 directly would be considered correct for this use case.
function mergeOne(nums1: number[], m: number, nums2: number[], n: number): void {
    const finalArr = [...nums1, ...nums2];
    nums1 = finalArr.filter((item) => item !== 0).sort((n1,n2) => n1 - n2);
};

// Solution for mutating nums1 array directly
function mergeTwo(nums1: number[], m: number, nums2: number[], n: number): void {
    let firstZero = m;
    let lastZero = m+n;

    for(let i=firstZero, j=0; i < lastZero; i++, j++){
        nums1[i] = nums2[j];
    }
    nums1.sort((n1,n2) => n1 - n2);
};

mergeTwo([1,2,3,0,0,0], 3, [2,5,6], 3);
mergeTwo([1], 1, [], 0);
mergeTwo([0], 0, [1], 1);

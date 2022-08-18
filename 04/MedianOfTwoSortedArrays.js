/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    if((nums1.length > 1000 || nums1.length < 0) 
       || (nums2.length > 1000 || nums2.length < 0)
       || (nums1.length+nums2.length > 2000 || nums1.length+nums2.length < 1)){
        return null;
    }
    
    let median;
    let half;
    let mergedArray = [...nums1, ...nums2];
    mergedArray.sort((a, b) => {
        return a - b;
    });
    
    if(mergedArray.length % 2 !== 0){
        half = Math.round((mergedArray.length/2)) -1;
        median = mergedArray[half];
    } else {
        half = (mergedArray.length / 2) -1;
        median = (mergedArray[half] + mergedArray[half+1]) / 2;
    }
    
    return median;
};

findMedianSortedArrays([1, 3], [2]);
findMedianSortedArrays([1, 2], [3, 4]);
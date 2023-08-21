/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let s = x.toString();
    let i = 0;
    while(i < s.length){
        if(s[i] !== s[s.length-1-i]){
            return false;
        }
        i++;
    }

    return true;
};

console.log(isPalindrome(121));    // True
console.log(isPalindrome(2332));    // True
console.log(isPalindrome(12621));   // True
console.log(isPalindrome(12772));   // False
console.log(isPalindrome(555522215555));    // False


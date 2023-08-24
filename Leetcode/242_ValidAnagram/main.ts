function isAnagram(s: string, t: string): boolean {
    let sArr: string[] = s.split('').sort();
    let tArr: string[] = t.split('').sort();
    
    if(sArr.length !== tArr.length) return false;

    return sArr.join('') === tArr.join('');
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
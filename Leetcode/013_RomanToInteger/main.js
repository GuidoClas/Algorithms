/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let result = 0;
    let charArray = s.split('');
    
    if(s.length > 0 && s.length < 16){
        charArray.forEach((c, index) => {
            switch(c){
                case 'M':
                    result += 1000;
                break;
                case 'D':
                    result += 500;
                break;
                case 'C':
                    if(charArray[index+1] === 'D' || charArray[index+1] === 'M'){
                        result-=100;
                    } else {
                        result+=100;
                    }
                break;
                case 'L':
                    result += 50;
                break;
                case 'X':
                    if(charArray[index+1] === 'L' || charArray[index+1] === 'C'){
                        result-=10;
                    } else {
                        result+=10;
                    }
                break;
                case 'V':
                    result += 5;
                break;
                case 'I':
                    if(charArray[index+1] === 'V' || charArray[index+1] === 'X'){
                        result-=1;
                    } else {
                        result+=1;
                    }
                break;
                default:
                    result = 0;
                break;
            }
        });
    }

    return result;
};

console.log(romanToInt("MCMXCIV")); //Equals 1994
console.log(romanToInt("LVIII")); //Equals 58
console.log(romanToInt("III")); //Equals 3

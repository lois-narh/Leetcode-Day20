/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    
    // Mapping of digits to letters
    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const result = [];
    
    function backtrack(combination, nextDigits) {
        // If no more digits to process, add combination to result
        if (!nextDigits) {
            result.push(combination);
            return;
        }
        
        // For each letter mapped to the current digit
        for (let letter of phoneMap[nextDigits[0]]) {
            // Recursively build combinations with remaining digits
            backtrack(combination + letter, nextDigits.slice(1));
        }
    }
    
    backtrack("", digits);
    return result;
};
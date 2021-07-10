// palindrome
const isPalindrome = string => {
    if(!string) return false;
    const reverseString = string.toString().split('').reverse().join('')
    return reverseString == string
}

const findBiggestPolindrome = (limit) => {
    const start = 100;
    const last = 999
    let max = 0
    for(let i = start; i <= last; i++) {
        for(let j = start; j <= last; j++) {
            const res = i * j
            if (res < limit && isPalindrome(res.toString())) {
                if(max < res) {
                    max = res
                }
            }
        }
    }
    return max
}

const testIsPolindrime = () => {
    const a = 'alma'
    const b = '1111'
    const c = ''
    console.log(a, isPalindrome(a))
    console.log(b, isPalindrome(b))
    console.log(c, isPalindrome(c))
}
 
const testFindBiggestPolindrome = () => {
    console.log(findBiggestPolindrome(1000000))
}

const test = () => {
    testIsPolindrime()
    testFindBiggestPolindrome()
}
test()
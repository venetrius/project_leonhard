// palindrome
const isPalindrome = string => {
    if(!string) return false;
    const reverseString = string.toString().split('').reverse().join('')
    return reverseString == string
}

let palindromes = []

const generatePalindromes = () => {
    const start = 100;
    const last = 999
    const store = {}
    for(let i = start; i <= last; i++) {
        for(let j = start; j <= last; j++) {
            const res = i * j
            if (isPalindrome(res.toString())) {
                store[res] = res
            }
        }
    }
    palindromes = Object.values(store).sort((a,b) => a - b)
}

const findBiggestPolindrome = (limit) => {
    if(!palindromes.length) {
        generatePalindromes()
    }

    for( let i = 0; i < palindromes.length; i++) {
        if(palindromes[i] > limit) {
            console.log({limit, val: palindromes[i], i})
            return(palindromes[i - 1])
        }
    }
    return palindromes[palindromes.length - 1]
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
    console.log(findBiggestPolindrome(101110))
    console.log(findBiggestPolindrome(800000))

    console.log(JSON.stringify(palindromes))
    console.log(palindromes.length)
}

const test = () => {
    testIsPolindrime()
    testFindBiggestPolindrome()
}
test()
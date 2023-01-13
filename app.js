/*Q2
function falsyOrTruthy(value1, value2)
{
    return (!value1) ? value1: value2;
    if(!value1)
    {
        return value1;
    }
    else
    {
        return value2
    }
}

console.log(falsyOrTruthy(null, 5));*/

/*Q3
function arrayLength(arr)
{
    return arr.length;
}

console.log (arrayLength([1, 3, 4]))*/

/*Q4 
function getLastElement(arr)
{
    return arr[arr.length-1]
}

console.log (getLastElement([1,23,46,3,65724]))*/

/*Q5
function sumOfArray(arr)
{
    let sum = 0;
    for (let i = 0; i < arr.length; ++i)
    {
        sum += arr[i]
    }
    return sum
}

console.log (sumOfArray([2, 2, 2, 2, 567]))*/

/*Q6 
function sigma(endNum)
{
    let sum = 0;
    for (let i = 1; i <=endNum; ++i)
    {
        sum+=i
    }
    return sum;
}

console.log(sigma (4))*/

/*Q7 
function findBiggestNum(arr)
{
    let hiNum = 0;
    for(let i = 0; i <arr.length; i++)
    {
        if (arr[i]>hiNum)
        {
            hiNum=arr[i]
        }
    }
    return hiNum;
}

console.log(findBiggestNum([1, 5, 2]))*/

/*Q8 
function reverseString(str)
{
    let revStr = "";
    for (let i = str.length-1; i >=0; --i)
    {
        revStr += str[i]
    }
    return revStr
}

console.log(reverseString("hello"))*/

/*Q9 
// SOLUTION 1 - FOR LOOP
function convertToZero(arr)
{
    for (let i = 0; i < arr.length; ++i)
    {
        arr[i] = 0;
    } 
    return arr;
}

console.log(convertToZero([1, 2, 3, 4, 764]))

// SOLUTION 2 - fill method
function convertToZero(arr)
{
    return new Array(arr.length).fill(0); 
}

console.log(convertToZero([2, 34, 234 ,346, 364, 23, 456, 25]))

// SOLUTION 3 - map method
function convertToZero(arr)
{
    return arr.map(elem => elem*0)
}

console.log (convertToZero([23, 4536, 234, 567]))*/

/*Q10
// SOLUTION 1 - for loop
function removeApples(arr)
{
    let noApples = []
    for (let i = 0; i <arr.length; ++i)
    {
        if (arr[i]!=="apple" && arr[i]!=="Apple" && arr[i]!=="Apples" && arr[i]!=="apples")
        {
            noApples.push(arr[i])
        }
    }
    return noApples
}

console.log (removeApples(["banana", "apples","aiugh", "aeyurg","apple"])) 

// SOLUTION 2 - filter method
function removeApples(arr)
{
    return arr.filter(elem => (elem !== "apple" && elem!=="Apple" && elem!=="Apples" && elem!=="apples"))
}

console.log (removeApples(["banana", "apples","aiugh", "aeyurg","apple"])) */

/*Q11 
// SOLLUTION 1 - for loop
function filterFalsy (arr)
{
    let truthy = []
    for (let i = 0; i < arr.length; ++i)
    {
        if (arr[i])
        {
            truthy.push(arr[i])
        }
    }
    return truthy
}

console.log (filterFalsy(["banana", "","aiugh", "aeyurg","apple"]))

// SOLLUTION 1 - for loop
function filterFalsy (arr)
{
    return arr.filter(elem => elem)
}

console.log (filterFalsy(["banana", "","aiugh", "aeyurg","apple"]))*/

/*Q12 */
function convertToBoolean(arr)
{
    return arr.map (elem => !!elem )
}
console.log (convertToBoolean(["banana", "",undefined, 0,"apple"]))
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// Binary search
function binSearch(arr, item) {
    let left = -1
    let right = arr.length

    while (right - left > 1) {
        const mid = Math.floor((left + right) / 2)

        if (arr[mid] === item) {
            return mid
        }

        if (arr[mid] > item) {
            right = mid
        } else {
            left = mid
        }
    }
    return -1
}

console.log(binSearch(arr, 3))

// Find how much the item appears in the array using binary search
const arr2 = [5, 2, 3, 2, 8, 10, 11, 2, 11, 9, 9].sort((a, b) => a - b)

function countFreq(arr, item) {
    const posItem = binSearch(arr, item)

    if (posItem === -1) {
        return 0
    }

    let i = posItem
    while (arr[i] === item) {
        i--
    }

    let j = posItem
    while (arr[j] === item) {
        j++
    }

    return j - i - 1
}

console.log(countFreq(arr2, 5))
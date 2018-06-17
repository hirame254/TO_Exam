const numbers = [20, 31, 42, 13, 5, 38]

console.log('合計 = ' + sum(numbers))
console.log('平均 = ' + average(numbers))

console.log('-- バブルソート --')
const bubbleSortAsc = bubbleSort(numbers)
console.log('　小さい順 = ' + bubbleSortAsc)
console.log('　最小値 = ' + bubbleSortAsc[0])
const bubbleSortDesc = bubbleSortAsc.reverse()
console.log('　大きい順 = ' + bubbleSortDesc)
console.log('　最大値 = ' + bubbleSortDesc[0])

console.log('-- クイックソート --')
const quickSortAsc = quickSort(numbers)
console.log('　小さい順 = ' + quickSortAsc)
console.log('　最小値 = ' + quickSortAsc[0])
const quickSortDesc = quickSortAsc.reverse()
console.log('　大きい順 = ' + quickSortDesc)
console.log('　最大値 = ' + quickSortDesc[0])



//合計
function sum(obj) {
    let total = 0
    for (const element of obj) {
        total += element
    }
    return total
}

//平均
function average(obj) {
    return sum(obj) / obj.length
}

//バブルソート：昇順
function bubbleSort(obj) {
    let keepValue
    for (let i = 0; i <= obj.length - 1; i++) {
        for (let j = obj.length - 1; j > i; j--) {

            if (obj[j - 1] > obj[j]) {
                keepValue = obj[j]
                obj[j] = obj[j - 1]
                obj[j - 1] = keepValue
            }
        }
    }
    return obj
}

//クイックソート：昇順
function quickSort(obj) {
    if (obj.length <= 1) {
        return obj
    }
    const pivot = obj[0]
    let bigger = []
    let smaller = []
    for (const item of obj) {
        if (item > pivot) {
            bigger.push(item)
        } else if (item < pivot) {
            smaller.push(item)
        }
    }

    bigger = quickSort(bigger)
    smaller = quickSort(smaller)

    return smaller.concat(pivot).concat(bigger)
}
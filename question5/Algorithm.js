const orgobj = [20, 31, 42, 13, 5, 38]

console.log('合計 = ' + sum(orgobj))
console.log('平均 = ' + average(orgobj, orgobj.length))

console.log('-- バブルソート --')
const bubble_sortobj_asc = bubble_sort(orgobj)
console.log('　小さい順 = ' + bubble_sortobj_asc)
console.log('　最小値 = ' + bubble_sortobj_asc[0])
const bubble_sortobj_desc = bubble_sortobj_asc.reverse()
console.log('　大きい順 = ' + bubble_sortobj_desc)
console.log('　最大値 = ' + bubble_sortobj_desc[0])

console.log('-- クイックソート --')
const quick_sortobj_asc = quick_sort(orgobj)
console.log('　小さい順 = ' + quick_sortobj_asc)
console.log('　最小値 = ' + quick_sortobj_asc[0])
const quick_sortobj_desc = quick_sortobj_asc.reverse()
console.log('　大きい順 = ' + quick_sortobj_desc)
console.log('　最大値 = ' + quick_sortobj_desc[0])



//合計
function sum(obj) {
    let total = 0
    for (const element of obj) {
        total += element
    }
    return total
}

//平均
function average(obj, len) {
    return sum(obj) / len
}

//バブルソート：昇順
function bubble_sort(obj) {
    let tmp_value
    for (let i = 0; i <= obj.length - 1; i++) {
        for (let j = obj.length - 1; j > i; j--) {

            if (obj[j - 1] > obj[j]) {
                tmp_value = obj[j]
                obj[j] = obj[j - 1]
                obj[j - 1] = tmp_value
            }
        }
    }
    return obj
}

//クイックソート：昇順
function quick_sort(obj) {
    if (obj.length <= 1) {
        return obj
    }
    const pivot = obj[0]
    let bigger = new Array(0)
    let smaller = new Array(0)
    for (const item of obj) {
        if (item > pivot) {
            bigger.push(item)
        } else if (item < pivot) {
            smaller.push(item)
        }
    }

    bigger = quick_sort(bigger)
    smaller = quick_sort(smaller)

    return smaller.concat(pivot).concat(bigger)
}
const input = Number(window.prompt('数値を入力してください'))

console.log(add(input))


function add(input) {
    let total = 0
    if (input == 0) {
        return 0
    } else {
        total = input + add(input - 1)
        return total
    }
}


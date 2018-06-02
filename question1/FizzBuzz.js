const input = window.prompt('数字を入力してください')

if (input != null) {
    fizzBuzz(input)
}

function fizzBuzz(input) {
    const range = []
    for (let i = 1; i <= input; i += 1) {
        range.push(i)
    }
    const result = range.map(function (num) {
        let message
        if (num % 15 == 0) {
            message = 'FizzBuzz'
        } else if (num % 3 == 0) {
            message = 'Fizz'
        } else if (num % 5 == 0) {
            message = 'Buzz'
        } else {
            message = new String(num)
        }
        return message
    })
    const outputstr = result.join(',')
    console.log(outputstr)
}


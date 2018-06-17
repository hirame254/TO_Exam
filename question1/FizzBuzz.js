const input = window.prompt('数字を入力してください')

if (input != null) {
    fizzBuzz(Number(input))
}

function fizzBuzz(input) {
    const result = []
    for (let num = 1; num <= input; num += 1) {
        let message
        if (num % 15 == 0) {
            message = 'FizzBuzz'
        } else if (num % 3 == 0) {
            message = 'Fizz'
        } else if (num % 5 == 0) {
            message = 'Buzz'
        } else {
            message = String(num)
        }
        result.push(message)
    }

    const outputstr = result.join(',')
    console.log(outputstr)
}


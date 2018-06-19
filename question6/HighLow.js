const answerNumber = Math.floor(Math.random() * 101)
let counter = 0
let number


console.log('0-100で数字を当てて')
highLowGame()

function highLowGame() {

    do {
        const inputNumber = window.prompt('0-100で数字を入れてください')
        if (inputNumber == null) {
            return
        }
        counter++
        number = Number(inputNumber)
        console.log(number)
        if (answerNumber > number) {
            console.log('もっと上')
        } else if (answerNumber < number) {
            console.log('もっと下')
        }
    } while (answerNumber !== number)
    console.log('正解！・・・・・' + counter + '回目で当てました')
    return

}

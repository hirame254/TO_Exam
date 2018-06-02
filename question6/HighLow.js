const answer_number = Math.floor(Math.random() * 100 + 1)
let counter = 0

console.log('0-100で数字を当てて')
highLowGame()

function highLowGame() {
    counter++
    const input_number = window.prompt('0-100で数字を入れてください')
    if (input_number == null) {
        return
    }
    console.log(input_number)
    if (answer_number == input_number) {
        console.log('正解！・・・・・' + counter + '回目で当てました')
        return
    } else if (answer_number > input_number) {
        console.log('もっと上')
        highLowGame()
    } else if (answer_number < input_number) {
        console.log('もっと下')
        highLowGame()
    }
}

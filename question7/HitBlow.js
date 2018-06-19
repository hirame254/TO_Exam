const answerNumber = String(getRandomNumberNoDup())
console.log(answerNumber)
let inputCounter = 0



console.log('4桁の数字は？')
hitBlowGame()

function hitBlowGame() {
    let hitCounter = 0
    let blowCounter = 0
    const inputNumber = window.prompt('数字が重複しない4桁の数字を入れてください')
    if (inputNumber == null) {
        return
    }
    console.log(inputNumber)
    inputCounter++

    if (answerNumber === inputNumber) {
        console.log(inputCounter + '回で正解！')
        return
    } else {
        for (let inputElementIndex = 0; inputElementIndex < 4; inputElementIndex++) {
            for (let answerElementIndex = 0; answerElementIndex < 4; answerElementIndex++) {
                if (inputNumber[inputElementIndex] === answerNumber[answerElementIndex]) {
                    if (inputElementIndex === answerElementIndex) {
                        hitCounter++
                    } else {
                        blowCounter++
                    }
                }
            }
        }
        console.log('はずれ！　' + hitCounter + 'Hits,' + blowCounter + 'Blow')
    }
}

function getRandomNumberNoDup() {
    let numberString = ''
    do {
        const randomNumber = Math.floor(Math.random() * 10)
        if (!(checkDuplication(numberString, randomNumber))) {
            numberString += String(randomNumber)
        }
    } while (numberString.length < 4)
    return numberString

}


function checkDuplication(str, number) {
    for (const element of str) {
        if (element === String(number)) {
            return true
        }
    }
    return false
}
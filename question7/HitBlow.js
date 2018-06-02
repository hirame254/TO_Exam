const answer_number = getRandomNumberNoDup()
let input_counter = 0
let hit_counter = 0
let blow_counter = 0
let input_position = 0
let answer_position = 0

console.log('4桁の数字は？')
hitBlowGame()

function hitBlowGame() {
    const input_number = window.prompt('数字が重複しない4桁の数字を入れてください')
    if (input_number == null) {
        return
    }
    console.log(input_number)
    input_counter++
    for (const input_element of input_number) {
        input_position++
        answer_position = 0
        for (const answer_element of answer_number) {
            answer_position++
            if (input_element == answer_element) {
                blow_counter++
                if (input_position == answer_position) {
                    hit_counter++
                }
                break
            }
        }

    }
    if (answer_number == input_number) {
        console.log(input_counter + '回で正解！')
        return
    } else {
        console.log('はずれ！　' + hit_counter + 'Hits,' + blow_counter + 'Blow')
        hit_counter = 0
        blow_counter = 0
        input_position = 0
        answer_position = 0
        hitBlowGame()
    }
}

function getRandomNumberNoDup() {
    let counter = 0
    let number_str = ''
    for (; ;) {
        counter++
        const random_number = getRandomNumber()
        if (counter == 1) {
            number_str = String(random_number)
        } else {
            if (!(checkDuplication(number_str, random_number))) {
                number_str += String(random_number)
            }
        }
        if (number_str.length == 4) {
            break
        }

    }
    return number_str
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10)
}

function checkDuplication(str, number) {
    for (const str_element of str) {
        if (str_element == String(number)) {
            return true
        }
    }
    return false
}
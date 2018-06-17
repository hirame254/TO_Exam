const janken = '「じゃんけん」'
const list = '0.グー 1.チョキ 2.パー '
const listobj = { '0': 'グー', '1': 'チョキ', '2': 'パー' }
const poi = 'ポイ'
const person_win = 0
const pc_win = 1
const draw = 9

jankenGame()

function jankenGame() {
    console.log(janken)
    const person_hand = window.prompt(list)
    if (person_hand == null) {
        return
    }
    const pc_hand = String(getRandomNumber())
    console.log(poi)
    console.log('コンピュータ：' + listobj[pc_hand])
    console.log('あなた：' + listobj[person_hand])
    const result = jankenJudge(pc_hand, person_hand)
    if (result === draw) {
        console.log('あいこでしょ！')
        jankenGame()
    } else if (result === pc_win) {
        console.log('コンピュータの勝ち')
        return
    } else if (result === person_win) {
        console.log('あなたの勝ち')
        return
    }
}

function jankenJudge(pc_hand, person_hand) {
    if (pc_hand == person_hand) {
        return draw
    } else if ((pc_hand == 0 && person_hand == 1) ||
        (pc_hand == 1 && person_hand == 2) ||
        (pc_hand == 2 && person_hand == 0)) {
        return pc_win
    } else if ((pc_hand == 0 && person_hand == 2) ||
        (pc_hand == 1 && person_hand == 0) ||
        (pc_hand == 2 && person_hand == 1)) {
        return person_win
    }
}

function getRandomNumber() {
    min = Math.ceil(0);
    max = Math.floor(2);
    const random_number = Math.floor(Math.random() * 3)
    return random_number;
}
